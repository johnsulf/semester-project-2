import * as auth from '../../api/auth/index.js';
import { updateNav } from './nav.js';

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get('email');
  const password = data.get('password');

  try {
    await auth.login(email, password);

    // Update the navigation to reflect login state
    updateNav();

    // Redirect to home view
    location.href = '#/';
  } catch {
    alert('Either your username was not found or your password is incorrect');
  }
}
