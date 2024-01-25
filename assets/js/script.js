const localStorageData = JSON.parse(localStorage.getItem("historyCity")) || [];

if (localStorageData != []) {

    if (localStorageData.length < 5) {
        $(localStorageData).each(function(i) {
            $("#historyParagraph").removeClass("hidden");
            const searchHistory = $("<button>").text(localStorageData[i]).addClass("btn btn-info btn-lg responsive-button m-2");
    
            $(searchHistory).on("click", function(e) {
                e.preventDefault();
                window.location.href = 'landing.html?city=' + encodeURIComponent(localStorageData[i]);
            })
    
            $("#recentCitiesContainer").append(searchHistory);
        })
    } else {
        for (let i = 0; i < 5; i++) {
            const searchHistory = $("<button>").text(localStorageData[i]).addClass("btn btn-info btn-lg responsive-button m-2");
    
            $(searchHistory).on("click", function(e) {
                e.preventDefault();
                window.location.href = 'landing.html?city=' + encodeURIComponent(localStorageData[i]);
            })
            $("#historyParagraph").removeClass("hidden");
            $("#recentCitiesContainer").append(searchHistory);
        }    
    }
}

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
              city = city.charAt(0).toUpperCase() + city.slice(1);
              history(city);
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
          randomCity = randomCity.charAt(0).toUpperCase() + randomCity.slice(1);
          history(randomCity);
            window.location.href = 'landing.html?city=' + encodeURIComponent(randomCity);
        });
    }

    function history(city) {
        const historyCityArray = JSON.parse(localStorage.getItem('historyCity')) || [];
        const historyButton = $("<button>").text(city).addClass("btn btn-info btn-lg responsive-button m-2");

        $(historyButton).on("click", function(e) {
            e.preventDefault();
            window.location.href = 'landing.html?city=' + encodeURIComponent(city);
        })

        if(!historyCityArray.includes(city)) {
            historyCityArray.unshift(city);
            localStorage.setItem("historyCity", JSON.stringify(historyCityArray));
            $("#recentCitiesContainer").append(historyButton);
        }
    }
});