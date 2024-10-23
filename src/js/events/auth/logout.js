import * as auth from '../../api/auth/index.js';
import { buildNav } from '../../components/nav/nav.js';

export function logoutListener(logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await auth.logout();
      buildNav();
      location.href = '#/';
    } catch {
      alert('An error occurred while logging out');
    }
  });
}
