import * as auth from '../../api/auth/index.js';
import { updateNav } from '../../helpers/updateNav.js';

export async function loginEventListener() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await auth.login(email, password);

      if (response.errors) {
        alert(`Login failed: ${response.errors[0].message}`);
        return;
      }
      // Updates the navigation to reflect login state
      updateNav();

      // Redirects to home view
      location.href = '#/';
      // Shows success message
      alert('Login successful!');
    } catch {
      alert('Either your username was not found or your password is incorrect');
    }
  });
}
