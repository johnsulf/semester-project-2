import { profile } from '../../helpers/authState.js';
import { authenticatedNav } from '../../components/nav/authenticatedNav/authenticatedNav.js';
import { unauthenticatedNav } from '../../components/nav/unauthenticatedNav.js';

/**
 * Builds the navigation bar by determining the user's authentication state and rendering the appropriate navigation elements.
 *
 * This function performs the following steps:
 * 1. Selects the DOM element with the ID 'authSection' where the navigation elements will be inserted.
 * 2. Checks if the user is authenticated by calling the `profile()` function.
 *    - If authenticated, it calls `authenticatedNav()` to build the navigation bar for authenticated users, passing the `authSection` element and the user profile data.
 *    - If not authenticated, it calls `unauthenticatedNav()` to build the navigation bar for unauthenticated users, passing the `authSection` element.
 *
 * @function buildNav
 *
 * @example
 * // Import the buildNav function and call it to initialize the navigation bar
 * import { buildNav } from './path/to/buildNav.js';
 *
 * // Initialize the navigation bar when the page loads or after a login/logout action
 * buildNav();
 */
export function buildNav() {
  const authSection = document.getElementById('authSection'); // Get the auth section

  // Check if the user is authenticated
  if (profile()) {
    authenticatedNav(authSection, profile()); // Build the authenticated nav
  } else {
    unauthenticatedNav(authSection); // Build the unauthenticated nav
  }
}
