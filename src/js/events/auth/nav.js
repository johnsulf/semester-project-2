import { isLoggedIn } from '../../api/auth/authState.js';
import { logoutListener } from './logout.js';

export function updateNav() {
  const authLink = document.getElementById('auth-link');

  if (isLoggedIn()) {
    authLink.innerHTML = `
            <a href="#/profile" class="mr-4">Profile</a>
            <a href="#" id="logout" class="mr-4">Logout</a>
        `;

    // Handle logout
    logoutListener();
  } else {
    // Show "Register" link if not logged in
    authLink.innerHTML = `
            <a href="#/register" class="mr-4">Register</a>
        `;
  }
}
