

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
  moviesData.getMoviesByUid()
    .then((movies) => {
      movies.forEach((movie) => {
        console.error(movie);
        if (e.target.id === movie.id) {
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
        }
      });
    });
};

const singleMovieSelected = () => {
  moviesData.getMoviesData()
    .then((results) => {
      const movieResults = results.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
        for (let i = 0; i < movieResults.length; i += 1) {
          movieResults[i].addEventListener('click', singleMovieView);
        }
      });
      console.error(movies);
    })
    .catch(err => console.error('no movies', err));
};

export default { singleMovieSelected };
