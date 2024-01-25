document.addEventListener('DOMContentLoaded', function() {
  var cityForm = document.getElementById('cityForm');
  var cityInput = document.getElementById('cityInput');
  var luckyButton = document.getElementById('luckyButton');
  var originalPlaceholder = cityInput.placeholder; // Zapamiętanie oryginalnego tekstu placeholder

  // Funkcja do walidacji wprowadzonego miasta
  function validateInput() {
      if (cityInput.value.length < 4) {
          cityInput.style.borderColor = 'red';
          cityInput.placeholder = 'Please enter a valid city name in this field'; // Ustawienie tekstu błędu jako placeholder
          cityInput.value = ''; // Czyszczenie bieżącej wartości
          return false;
      }
      return true;
  }

  // Obsługa zdarzenia submit dla formularza
  if(cityForm) {
      cityForm.addEventListener('submit', function(event) {
          event.preventDefault();
          if (validateInput()) {
              var city = cityInput.value;
              window.location.href = 'landing.html?city=' + encodeURIComponent(city);
          }
      });
  }

  // Przywrócenie oryginalnego placeholdera i stylów przy kliknięciu w pole wprowadzania
  if(cityInput) {
      cityInput.addEventListener('click', function() {
          cityInput.style.borderColor = '';
          cityInput.placeholder = originalPlaceholder; // Przywrócenie oryginalnego placeholder
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
});