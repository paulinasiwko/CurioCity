document.addEventListener('DOMContentLoaded', function() {
  var cityForm = document.getElementById('cityForm');
  var cityInput = document.getElementById('cityInput');
  var luckyButton = document.getElementById('luckyButton');
  var originalPlaceholder = cityInput.placeholder; 

  function validateInput() {
      if (cityInput.value.length < 4) {
          cityInput.style.borderColor = 'red';
          cityInput.placeholder = 'Please enter a valid city name in here'; 
          cityInput.value = ''; 
          return false;
      }
      return true;
  }

  if(cityForm) {
      cityForm.addEventListener('submit', function(event) {
          event.preventDefault();
          if (validateInput()) {
              var city = cityInput.value;
              window.location.href = 'landing.html?city=' + encodeURIComponent(city);
          }
      });
  }

  if(cityInput) {
      cityInput.addEventListener('click', function() {
          cityInput.style.borderColor = '';
          cityInput.placeholder = originalPlaceholder;
      });
  }

  
    if(luckyButton) {
        luckyButton.addEventListener('click', function() {  
          var cities = ["Paris", "Dubai", "Madrid", "Tokyo", "Amsterdam", "Berlin", "Rome",
            "New York City", "Barcelona", "London", "Singapore", "Munich", "Milan", "Seoul", "Dublin",
            "Osaka", "Hong Kong", "Vienna", "Los Angeles", "Lisbon", "Prague", "Sydney", "Istanbul",
            "Melbourne", "Orlando", "Frankfurt", "Florence", "Taipei", "Toronto", "Athens", "Zurich",
            "Bangkok", "Las Vegas", "Miami", "Venice", "Abu Dhabi", "Stockholm", "Brussels", "Tel Aviv",
            "San Francisco", "Shanghai", "Warsaw", "Copenhagen", "Nice", "Budapest", "Valencia", "Mexico City",
            "Antalya", "Beijing", "Edinburgh", "Porto", "Jerusalem", "Montreal", "Rhodes", "Verona",
            "Lima", "Phuket", "Delhi", "Cairo", "Oslo", "Bangladore", "Chicago", "Helsinki", "Boston",
            "Moscow", "Casablanca"
          ];
          var randomCity = cities[Math.floor(Math.random() * cities.length)];
            window.location.href = 'landing.html?city=' + encodeURIComponent(randomCity);
        });
    }

var recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];

function updateRecentCities(city) {
    if(recentCities.includes(city)) {
        recentCities = recentCities.filter(c => c !== city); 
    }
    recentCities.unshift(city); 
    if(recentCities.length > 3) {
        recentCities.pop(); 
    }
    localStorage.setItem('recentCities', JSON.stringify(recentCities));
    renderRecentCityButtons();
}

function renderRecentCityButtons() {
  const container = document.createElement('div');
  container.id = 'recentCitiesContainer';

  if(recentCities.length > 0) {
      const description = document.createElement('p');
      description.textContent = 'Your recent searches:';
      description.className = 'recent-searches-description m-3';
      container.appendChild(description);
  }

  recentCities.forEach(city => {
      const button = document.createElement('button');
      button.textContent = city;
      button.className = 'btn btn-info btn-lg responsive-button m-2';
      button.onclick = () => window.location.href = 'landing.html?city=' + encodeURIComponent(city);
      container.appendChild(button);
  });

  const oldContainer = document.getElementById('recentCitiesContainer');
  if(oldContainer) {
      oldContainer.parentNode.replaceChild(container, oldContainer);
  } else {
      cityForm.parentNode.insertBefore(container, cityForm.nextSibling);
  }
}

if(cityForm) {
    cityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateInput()) {
            var city = cityInput.value;
            city = city.charAt(0).toUpperCase() + city.slice(1);
            updateRecentCities(city);
            window.location.href = 'landing.html?city=' + encodeURIComponent(city);
        }
    });
}

renderRecentCityButtons();
});