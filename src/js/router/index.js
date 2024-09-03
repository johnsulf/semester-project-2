// import { load, save } from '../storage';
import { isLoggedIn } from '../api/auth/authState.js';

function authGuard(callback = () => {}, view = '') {
  if (isLoggedIn()) {
    callback();
  } else {
    if (view) {
      location.href = `./`;
    }
    document.querySelector('data-auth-register').click();
    const message = document.createElement('div');
    message.classList.add('alert', 'alert-warning');
    message.innerText = 'You must be logged in to view this page.';
    return message;
  }
}

authGuard();
