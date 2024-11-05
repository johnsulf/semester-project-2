import * as auth from '../../api/auth/index.js';
import { buildNav } from '../../components/nav/nav.js';

// function to add event listener to the logout button
export function logoutListener(logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await auth.logout(); // Call the logout function
      buildNav(); // Updates the navbar to reflect login state
      location.href = '#/'; // Redirects to home view
    } catch {
      alert('An error occurred while logging out');
    }
  });
}
