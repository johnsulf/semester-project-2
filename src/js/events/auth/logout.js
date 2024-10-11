import * as auth from '../../api/auth/index.js';
import { updateNav } from '../../helpers/updateNav.js';

export function logoutListener() {
  document.getElementById('logout').addEventListener('click', async () => {
    try {
      await auth.logout();
      updateNav();
      location.href = '#/';
    } catch {
      alert('An error occurred while logging out');
    }
  });
}
