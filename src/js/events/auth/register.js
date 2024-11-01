import * as auth from '../../api/auth/index.js';
import { buildNav } from '../../components/nav/nav.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';

// Function to add event listener to the register form
export async function registerEventListener() {
  const form = document.getElementById('register-form');

  // Add event listener to the form
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    disableButton(
      form.querySelector('button'),
      'Registering...',
      'bg-primary',
      'bg-gray-400',
    );

    // Collect form data
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

      // Check for errors in the response
      if (response.errors) {
        enableButton(
          form.querySelector('button'),
          'Register',
          'bg-gray-400',
          'bg-primary',
        );
        alert(`Registration failed: ${response.errors[0].message}`);
        return;
      }

      // Registration successful
      // Proceed to log in the user
      await auth.login(email, password);

      buildNav(); // Update the navbar to reflect login state

      location.href = '#/'; // Redirect to home view

      // Show success message
      alert('Registration successful! You are now logged in.');
    } catch (e) {
      alert(`An error occurred: ${e.message}`);
    }
  });
}
