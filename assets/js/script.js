document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var city = document.getElementById('cityInput').value;
    window.location.href = 'landing.html?city=' + encodeURIComponent(city);
  });

    // Add functionality for 'I feel lucky!' button
