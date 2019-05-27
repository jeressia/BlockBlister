import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += '<div class="wrapper">';
    domString += `<div class="rating-card-top">RATED: ${movie.filmRating}</div>`;
    domString += `<div id="${movie.id}" class="card movie" style="width: 18rem;">`;
    domString += `<img class="card-img-top" src=${movie.imageURL} alt="${movie.name}">`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies, domStringBuilder };
