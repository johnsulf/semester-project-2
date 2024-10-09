import * as auth from '../../api/auth/index.js';
import { updateNav } from '../../helpers/updateNav.js';

export async function registerEventListener() {
  const form = document.getElementById('register-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email');
    const password = data.get('password');

    try {
      await auth.register(email, password);

      // Updates the navigation to reflect login state
      updateNav();

      // Redirects to home view
      location.href = '#/';
    } catch {
      alert('An error occurred while registering');
    }
  });
}
