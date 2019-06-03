import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      const movieValues = Object.values(moviesResults);
      let domString = '';
      for (let i = 0; i < movieValues.length; i += 1) {
        domString += '<div class="wrapper" id="wrapper">';
        domString += `<div class="rating-card-top">RATED: ${movieValues[i].filmRating}</div>`;
        domString += `<div id="${movieValues[i].id}" class="card movie" style="width: 18rem;">`;
        domString += `<img class="card-img-top" src=${movieValues[i].imageURL} alt="${movieValues[i].name} id="movie-photo>`;
        domString += '<button class="btn btn-info rate-btn">Rate This Movie</button>';
        domString += '<button class="btn btn-dark text-light watch-btn">Add To Watchlist</button>';
        domString += '</div>';
        domString += '</div>';
      }
      util.printToDom('movies', domString);
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
