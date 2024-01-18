$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    if (city) {
        getWeatherData(city); // changed function name
    }
});

const apiKey = '1f16e444f57239f90a3d711eb12384dd'; // changed to apiKey

async function getCoordinates(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.coord) {
            return { lat: data.coord.lat, lon: data.coord.lon };
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        // Optionally, show error to user
    }
}

async function getWeatherData(cityName) {
    const coords = await getCoordinates(cityName);
    if (!coords) return;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        if (data && data.list && data.city) {
            updateUI(data);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        // Optionally, show error to user
    }
}

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function updateUI(weatherData) {
    const currentWeather = weatherData.list[0];
    const todayContainer = document.getElementById('today');
    if (todayContainer) {
        todayContainer.innerHTML = `
            <h2>Current Weather in ${weatherData.city.name}</h2>
            <p>Date: ${formatDate(currentWeather.dt)}</p>
            <p>Temperature: ${currentWeather.main.temp}°C</p>
            <p>Humidity: ${currentWeather.main.humidity}%</p>
            <p>Wind Speed: ${currentWeather.wind.speed} m/s</p>
            <img src="http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png" alt="Weather icon">
        `;
    }
}
