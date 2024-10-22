import { isLoggedIn } from '../../api/auth/authState.js';
import { loggedInUserMenu } from './loggedInUserMenu.js';

export function buildNav() {
  const authLink = document.getElementById('auth-link');

  if (isLoggedIn()) {
    loggedInUserMenu(authLink);
  } else {
    authLink.innerHTML = `
      <a href="#/login" class="text-white mr-4">Log In</a>
      <a href="#/register" class="text-white">Register</a>
    `;
  }
}
