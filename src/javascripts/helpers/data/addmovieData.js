import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewMovie = movieObject => axios.post(`${firebaseUrl}/movies/movies.json`, movieObject);

const getMoviesByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies/movies.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const movieResults = results.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
      });
      resolve(movies);
    })
    .catch(err => reject(err));
});

const addToWatchlist = movieObject => axios.post(`${firebaseUrl}/userMovies/userMovies.json`, movieObject);

export default { addNewMovie, getMoviesByUid, addToWatchlist };
