import * as auth from '../../../api/auth/index.js';
import { buildNav } from '../../../components/nav/nav.js';

/**
 * Attaches an event listener to the logout button that handles the logout process when clicked.
 *
 * This function performs the following actions when the logout button is clicked:
 * 1. Calls the `auth.logout()` function to log the user out.
 * 2. Rebuilds the navigation bar to reflect the unauthenticated state by calling `buildNav()`.
 * 3. Redirects the user to the home view by setting `location.href` to `'#/'`.
 * 4. Catches any errors during the logout process and displays an alert message.
 *
 * @param {HTMLButtonElement} logoutBtn - The logout button element to which the event listener will be attached.
 *
 * @example
 * // Assume you have a logout button with the ID 'logoutBtn' in your HTML
 * const logoutBtn = document.getElementById('logoutBtn');
 *
 * // Attach the logout event listener
 * logoutListener(logoutBtn);
 */
export function logoutListener(logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await auth.logout(); // Call the logout function
      buildNav(); // Update the navbar to reflect the unauthenticated state
      location.href = '#/'; // Redirect to the home view
    } catch {
      alert('An error occurred while logging out');
    }
  });
}
