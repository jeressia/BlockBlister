import firebase from 'firebase/app';
import 'firebase/auth';

import movies from '../../components/addmovie/addmovie';

const authDiv = document.getElementById('auth');
const moviesDiv = document.getElementById('movies');
const addMovieDiv = document.getElementById('addme');
const footerDiv = document.getElementById('footer');
const movieTitle = document.getElementById('movie-title');
const authNavbar = document.getElementById('navbar-button-auth');
const searchNavbar = document.getElementById('search-box-nav');
const accountNavbar = document.getElementById('account-button-logout');
const moviesNavbar = document.getElementById('navbar-button-movies');
const starsNavbar = document.getElementById('navbar-button-stars');
const popularNavbar = document.getElementById('navbar-button-popular');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      moviesDiv.classList.remove('hide');
      footerDiv.classList.remove('hide');
      movieTitle.classList.remove('hide');
      authNavbar.classList.add('hide');
      accountNavbar.classList.remove('hide');
      searchNavbar.classList.remove('hide');
      moviesNavbar.classList.remove('hide');
      starsNavbar.classList.remove('hide');
      popularNavbar.classList.remove('hide');
      movies.showMovies();
    } else {
      authDiv.classList.remove('hide');
      moviesDiv.classList.add('hide');
      addMovieDiv.classList.add('hide');
      footerDiv.classList.add('hide');
      movieTitle.classList.add('hide');
      authNavbar.classList.remove('hide');
      accountNavbar.classList.add('hide');
      searchNavbar.classList.add('hide');
      moviesNavbar.classList.add('hide');
      starsNavbar.classList.add('hide');
      popularNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
