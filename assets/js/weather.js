const apiKey = '1f16e444f57239f90a3d711eb12384dd'; // Your OpenWeather API Key

// Global variable to store city coordinates
let cityCoordinates = { lat: 0, lon: 0 };

async function getCoordinates(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.coord) {
            cityCoordinates.lat = data.coord.lat;
            cityCoordinates.lon = data.coord.lon;
            return cityCoordinates;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
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
            if (window.fetchPointsOfInterest) {
                window.fetchPointsOfInterest(coords.lat, coords.lon);
            }
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
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
    console.log(weatherData)
    const currentWeather = weatherData.list[0];
    const todayContainer = document.getElementById('today');
    const mainCardContainer = document.getElementById('main-card');
    if (todayContainer) {
        todayContainer.innerHTML = `
            <h4>Current Weather in ${weatherData.city.name}</h4>            
            <img src="http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png" alt="Weather icon">
            <p>Date: ${formatDate(currentWeather.dt)}</p>
            <p>Temperature: ${currentWeather.main.temp}°C</p>
            <p>Humidity: ${currentWeather.main.humidity}%</p>
            <p>Wind Speed: ${currentWeather.wind.speed} m/s</p>
        `;
    }

    if (mainCardContainer) {
        mainCardContainer.innerHTML = `
            <h1>${weatherData.city.name}, ${weatherData.city.country}</h1>
            <p>Some description about this place</p>
        `;
    }

}

// Function to get the stored city coordinates
function getCityCoordinates() {
    return cityCoordinates;
}

// Initialize when document is loaded
$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    if (city) {
        getWeatherData(city);
    }
});
