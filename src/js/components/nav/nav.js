import { profile } from '../../api/auth/authState.js';
import { authenticatedNav } from './authenticatedNav/authenticatedNav.js';
import { unauthenticatedNav } from './unauthenticatedNav.js';

// Function to build the navigation bar
export function buildNav() {
  const authSection = document.getElementById('authSection'); // Get the auth section

  // Check if the user is authenticated
  if (profile()) {
    authenticatedNav(authSection, profile()); // Build the authenticated nav
  } else {
    unauthenticatedNav(authSection); // Build the unauthenticated nav
  }
}
