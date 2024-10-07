import { isLoggedIn } from '../../api/auth/authState.js';
import { logoutListener } from './logout.js';

export function updateNav() {
  const authLink = document.getElementById('auth-link');

  if (isLoggedIn()) {
    authLink.innerHTML = `
            <a href="#/profile" class="text-white">Profile</a>
            <a href="#" id="logout" class="text-white">Logout</a>
        `;

    // Handle logout
    logoutListener();
  } else {
    // Show "Register" link if not logged in
    authLink.innerHTML = `
            <a href="#/register" class="text-white">Register</a>
        `;
  }
}
