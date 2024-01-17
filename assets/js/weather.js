$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    if(city) {
        getWeather(city);
    }
});

const apiKEY = '1f16e444f57239f90a3d711eb12384dd';

function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            updateWeatherData(data);
        })
        .catch(error => {
            console.log('Error fetching the weather data:', error);
        });
}

function updateWeatherData(data) {
    // Process and update your HTML with the weather data
    console.log(data); // For testing purposes
}
