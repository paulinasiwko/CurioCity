$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    if(city) {
        searchMoviesByCity(city);
    }
});

function searchMoviesByCity(city) {
    // Use the OMDB API here to search for movies
    // Modify according to your needs
}

function displayResults(data) {
    // Process and display the movie data in your HTML
}
