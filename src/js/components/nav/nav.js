import { profile } from '../../api/auth/authState.js';
import { authenticatedNav } from './authenticatedNav/authenticatedNav.js';
import { unauthenticatedNav } from './unauthenticatedNav.js';

export function buildNav() {
  const authSection = document.getElementById('authSection');

  if (profile()) {
    authenticatedNav(authSection, profile());
  } else {
    unauthenticatedNav(authSection);
  }
}
