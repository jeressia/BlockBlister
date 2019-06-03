import firebase from 'firebase/app';
import 'firebase/auth';

import addmovieData from '../../helpers/data/addmovieData';
import util from '../../helpers/util';

const movieDiv = document.getElementById('movies');
const newMovieDiv = document.getElementById('addmovie');

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    title: document.getElementById('title').value,
    genre: document.getElementById('genre').value,
    id: firebase.auth().currentUser.uid,
    filmRating: document.getElementById('filmRating').value,
    releaseYear: document.getElementById('rYear').value,
    description: document.getElementById('description').value,
    imageURL: document.getElementById('imageURL').value,
  };
  addmovieData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('title').value = '';
      document.getElementById('genre').value = '';
      document.getElementById('filmRating').value = '';
      document.getElementById('rYear').value = '';
      document.getElementById('description').value = '';
      document.getElementById('imageURL').value = '';
      movieDiv.classList.remove('hide');
      newMovieDiv.classList.add('hide');
      document.getElementById('hideTitle').classList.add('hide');
      document.getElementById('add-movie-btn').classList.remove('hide');
      window.location.reload();
    })
    .catch(err => console.error('no new friends', err));
  console.error(newMovie);
};

const newMovieButton = () => {
  document.getElementById('add-movie-btn').classList.add('hide');
  document.getElementById('hideTitle').classList.remove('hide');
  movieDiv.classList.add('hide');
  newMovieDiv.classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};
const cancelMovieButton = () => {
  movieDiv.classList.remove('hide');
  newMovieDiv.classList.add('hide');
  document.getElementById('hideTitle').classList.add('hide');
  document.getElementById('add-movie-btn').classList.remove('hide');
};

const showMovies = () => {
  let domString = '<h2 id="hideTitle" class="hide">Add New Movie</h2>';
  domString += '<button id="add-movie-btn" class="btn btn-info">Add Movie</button>';
  util.printToDom('addme', domString);
  document.getElementById('add-movie-btn').addEventListener('click', newMovieButton);
  document.getElementById('cancel-movie-btn').addEventListener('click', cancelMovieButton);
};

export default { showMovies };
