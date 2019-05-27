import firebase from 'firebase/app';
import 'firebase/auth';

const navbarEvents = () => {
  const navLinks = document.getElementsByClassName('dropdown-item');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut();
      }
    });
  }
};

export default { navbarEvents };
