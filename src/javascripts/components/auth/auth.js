import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import './auth.scss';

import googleImage from '../../../../assets/googlebtn.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authBuilder = () => {
  let domString = '<div class="login-wrapper">';
  domString += '<h2 class="log-title text-light"><i class="fas fa-play"></i> BlockBlister</h2>';
  domString += `<img class="button" src=${googleImage} id="google-auth"/>`;
  domString += '</div>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authBuilder };
