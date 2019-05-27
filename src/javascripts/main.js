import 'bootstrap/dist/js/bootstrap.bundle';

import firebase from 'firebase/app';

import auth from './components/auth/auth';

import myNavbar from './components/myNavbar/myNavbar';

import movies from './components/movies/movies';

import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authBuilder();
  movies.initializeMovies();
};

init();
