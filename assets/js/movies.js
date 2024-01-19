function fetchMoviesByCountry(countryID) {
    const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=3aa66fa3cfba7cbbbfa215cb9fcb528d&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=${countryID}`;
    
    fetch(movieURL)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(err => console.error('Error fetching movies:', err));
  }
  
  function displayMovies(movies) {
    const moviesDiv = document.getElementById('movies');
    if (!moviesDiv) return;
  
    moviesDiv.innerHTML = '';
    const limitedMovies = movies.slice(0, 3)
    limitedMovies.forEach(movie => {
        const movieElement = `
            <div>
                <h6>${movie.title}</h6>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
            </div>
        `;
        moviesDiv.innerHTML += movieElement;
    });


  }
  
  function waitForCountryIDAndFetchMovies() {
    const checkInterval = setInterval(() => {
        if (window.countryID) {
            clearInterval(checkInterval);
            fetchMoviesByCountry(window.countryID);
        }
    }, 100);
  
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 5000); // Stop checking after 5 seconds
  }
  
  document.addEventListener('DOMContentLoaded', waitForCountryIDAndFetchMovies);