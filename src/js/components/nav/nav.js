import { profile } from '../../api/auth/authState.js';
import { loggedInUserMenu } from './loggedInUserMenu.js';
import { unauthenticatedNav } from './unauthenticatedNav.js';

export function buildNav() {
  const authSection = document.getElementById('authSection');

  if (profile()) {
    loggedInUserMenu(authSection, profile());
  } else {
    unauthenticatedNav(authSection);
  }
}
