import { isLoggedIn } from '../api/auth/authState.js';
import { loggedInUserMenu } from '../components/nav/loggedInUserMenu.js';

export function updateNav() {
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
