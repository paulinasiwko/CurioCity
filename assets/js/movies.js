// $(document).ready(function() {
//     var params = new URLSearchParams(window.location.search);
//     var city = params.get('city');
//     if(city) {
//         searchMoviesByCity(city);
//     }
// });

// function searchMoviesByCity(city) {
//     // Use the OMDB API here to search for movies
//     // Modify according to your needs
// }

// function displayResults(data) {
//     // Process and display the movie data in your HTML
// }


// function to get top rated movies from searched country
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE2NmZhM2NmYmE3Y2JiYmZhMjE1Y2I5ZmNiNTI4ZCIsInN1YiI6IjY1YTk4NTk2N2NhYTQ3MDEzNjA5MjUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aj77Y2PiumP8Z-l2PLtNspK8tSsKA9qK_dvhRDVfV1E'
    }
  };

  const movieURL = `https://api.themoviedb.org/3/movie/top_rated?language=pl`;
  
    fetch(movieURL, options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data)
        let top5 = data.results[0]; // array of 20 elements
        console.log(top5);
        let moviePoster  = data.results[0].poster_path; // poster of searched movie 
        console.log(moviePoster);
    });

