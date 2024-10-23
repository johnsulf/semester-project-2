import * as auth from '../../api/auth/index.js';
import { buildNav } from '../../components/nav/nav.js';

export async function registerEventListener() {
  const form = document.getElementById('register-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const password = data.get('password').trim();
    const avatarUrl = data.get('avatar').trim();

    // Prepare avatar object if avatar URL is provided
    const avatar = avatarUrl
      ? { url: avatarUrl, alt: `${name}'s avatar` }
      : null;

    try {
      // Call the register function with all required parameters
      const response = await auth.register(name, email, password, avatar);

      if (response.errors) {
        // Display error messages
        alert(`Registration failed: ${response.errors[0].message}`);
        return;
      }

      // Registration successful
      // Proceed to log in the user
      const loginResponse = await auth.login(email, password);

      if (loginResponse.errors) {
        alert(`Login failed: ${loginResponse.errors[0].message}`);
        return;
      }

      // Updates the navigation to reflect login state
      buildNav();

      // Redirect to home view
      location.href = '#/';

      // Show success message
      alert('Registration successful! You are now logged in.');
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  });
}
