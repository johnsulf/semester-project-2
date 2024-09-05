import { isLoggedIn, profile } from '../../api/auth/authState.js';

export function updateNav() {
  const authLink = document.getElementById('auth-link');

  if (isLoggedIn()) {
    const user = profile();
    authLink.innerHTML = `
            <a href="#/profile" class="mr-4">Profile (${user.name})</a>
            <a href="#" id="logout" class="mr-4">Logout</a>
        `;

    // Handle logout
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      updateNav(); // Re-render the nav after logout
      location.href = '#/'; // Redirect to home after logout
    });
  } else {
    // Show "Register" link if not logged in
    authLink.innerHTML = `
            <a href="#/register" class="mr-4">Register</a>
        `;
  }
}
