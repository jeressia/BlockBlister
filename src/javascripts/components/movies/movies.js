import firebase from 'firebase/app';
import 'firebase/auth';

import moviesData from '../../helpers/data/moviesData';
import addMoviesData from '../../helpers/data/addmovieData';
import util from '../../helpers/util';

import './movies.scss';

const showRating = (e) => {
  console.error(e.target.id);
  const ratebtn = document.getElement(e.target.id);
  ratebtn(e.target.id).classlist.remove('hide');
};

const rateMovieEvent = () => {
  const ratebtns = document.getElementsByClassName('rate-btn');
  for (let i = 0; i < ratebtns.length; i += 1) {
    ratebtns[i].addEventListener('click', showRating);
  }
};

const watchMovieEvent = (e) => {
  addMoviesData.getMoviesByUid(firebase.auth().currentUser.uid)
    .then((resp) => {
      console.error(resp);
    })
    .catch(err => console.error('yessss', err));
  const movieId = e.target.id.split('.')[1];
  console.error(movieId);
};

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
        domString += `<img class="card-img-top" src=${movieValues[i].imageURL} alt="${movieValues[i].name} id="movie">`;
        domString += `<button class="btn btn-info rate-btn id="rateBtn.${movieValues[i].id}">Rate This Movie</button>`;
        domString += '<div id="ratings" class="ratings hide"><i class="fas fa-film"></i><i class="fas fa-film"></i><i class="fas fa-film"></i><i class="fas fa-film"></i><i class="fas fa-film"></i></div>';
        domString += `<button class="btn btn-dark text-light watch-btn" id="watchBtn.${movieValues[i].id}">Add To Watchlist</button>`;
        domString += '</div>';
        domString += '</div>';
      }
      util.printToDom('movies', domString);
      const ratebtns = document.getElementsByClassName('rate-btn');
      for (let i = 0; i < ratebtns.length; i += 1) {
        ratebtns[i].addEventListener('click', rateMovieEvent);
      }
      const watchbtns = document.getElementsByClassName('watch-btn');
      for (let i = 0; i < watchbtns.length; i += 1) {
        watchbtns[i].addEventListener('click', watchMovieEvent);
      }
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
