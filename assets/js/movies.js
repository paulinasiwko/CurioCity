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
  
    moviesDiv.innerHTML = `
    <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://image.tmdb.org/t/p/w500${movies[0].poster_path}" class="carousel-img" alt="${movies[0].title} poster">
        <div class="carousel-caption d-none d-md-block">
            <h5>${movies[0].title}</h5>
            <p>${movies[0].overview}</p>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <img src="https://image.tmdb.org/t/p/w500${movies[1].poster_path}" class="carousel-img" alt="${movies[1].title} poster">
        <div class="carousel-caption d-none d-md-block">
            <h5>${movies[1].title}</h5>
            <p>${movies[1].overview}</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="https://image.tmdb.org/t/p/w500${movies[2].poster_path}" class="carousel-img" alt="${movies[2].title} poster">
        <div class="carousel-caption d-none d-md-block">
            <h5>${movies[2].title}</h5>
            <p>${movies[2].overview}</p>
        </div>
    </div>
    `;
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