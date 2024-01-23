document.addEventListener('DOMContentLoaded', function() {
    var cityForm = document.getElementById('cityForm');
    var luckyButton = document.getElementById('luckyButton');
  
    if(cityForm) {
        cityForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var city = document.getElementById('cityInput').value;
            window.location.href = 'landing.html?city=' + encodeURIComponent(city);
        });
    }
  
    if(luckyButton) {
        luckyButton.addEventListener('click', function() {  
          var cities = ["Paris", "Dubai", "Madrid", "Tokyo", "Amsterdam", "Berlin", "Rome",
            "New York", "Barcelona", "London", "Singapore", "Munich", "Milan", "Seoul", "Dublin",
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