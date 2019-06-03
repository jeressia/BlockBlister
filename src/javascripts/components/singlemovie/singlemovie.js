

/* I need to be able to click a movie.
Once I click the movie, I should see only that movie and the navbar on the page.
The movie cover will be on the left (large),
the title will be on the right with the description below it.
Underneath the photo of the movie, there should be a way to rate the movie
and a way to add to wishlist.
There needs to be a back button on the screen */

import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';

const singleMovieView = (e) => {
  moviesData.getMoviesByUid(uid)
    .then((resp) => {
      if (e.target.id === movie.id){
      movies.forEach((movie) => {
      let domString = '';
        domString += '<div class="wrapper" id="wrapper">';
        domString += `<div class="rating-card-top">RATED: ${movie.filmRating}</div>`;
        domString += `<div id="${movie.movieId}" class="card movie" style="width: 18rem;">`;
        domString += `<img class="card-img-top" src=${movie.imageURL} alt="${movie.name} id="movie-photo">`;
        domString += '<button class="btn btn-info rate-btn">Rate This Movie</button>';
        domString += '<button class="btn btn-dark text-light watch-btn">Add To Watchlist</button>';
        domString += '</div>';
        domString += '</div>';
      util.printToDom('singlemovie', domString);
    })
  };

const singleMovieSelected = () => {
  const singleMovie = document.getElementsByClassName('movie');
  for (let i = 0; i < singleMovie.length; i += 1) {
    singleMovie[i].addEventListener('click', singleMovieView);
  }
};

// const singleClick = () => {
//   moviesData.getMoviesData()
//     .then((resp) => {
//       const moviesResults = resp.data.movies;
//       const movieValues = Object.values(moviesResults);
//       allMovies.initializeMovies(movieValues);
//     });
// };

export default { singleMovieSelected };
