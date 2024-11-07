import * as auth from '../../../api/auth/index.js';
import { disableButton, enableButton } from '../../../helpers/buttonState.js';
import { handleErrors } from '../../../helpers/handleErrors.js';
import { handleSuccessfulLogin } from '../../../helpers/handleSuccessfulLogin.js';

/**
 * Attaches a submit event listener to the registration form to handle user registration.
 *
 * This function performs the following actions:
 * 1. Prevents the default form submission behavior.
 * 2. Disables the register button and updates its text to indicate the registration process is ongoing.
 * 3. Collects the form data, including optional avatar URL.
 * 4. Attempts to register the user with the provided credentials.
 * 5. Handles any errors that occur during the registration process.
 * 6. On successful registration, automatically logs in the user and handles post-login actions.
 *
 * @async
 * @function registerEventListener
 * @returns {Promise<void>} - A promise that resolves when the event listener is set up.
 *
 * @example
 * // Initialize the registration event listener after rendering the registration form
 * registerEventListener();
 */
export async function registerEventListener() {
  const form = document.getElementById('register-form');

  // Add event listener to the form
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    const registerButton = form.querySelector('button');
    disableButton(
      registerButton,
      'Registering...',
      'bg-primary',
      'bg-gray-400',
    );

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const avatarUrl = formData.get('avatar').trim();

    // Prepare avatar object only if avatar URL is provided
    let avatar;
    if (avatarUrl) {
      avatar = { url: avatarUrl, alt: `${name}'s avatar` };
    }

    try {
      // Call the register function with all required parameters
      const registerResponse = await auth.register(
        name,
        email,
        password,
        avatar,
      );

      // handle errors in the registration response
      if (handleErrors(registerResponse, registerButton, 'Registration'))
        return;

      // Registration successful, proceed to log in the user
      const loginResponse = await auth.login(email, password);

      // handle errors in the login response
      if (
        handleErrors(loginResponse, registerButton, 'Login after registration')
      )
        return;

      // Handle successful login
      await handleSuccessfulLogin(loginResponse);

      // Show success message
      alert('Registration successful! You are now logged in.');
    } catch (e) {
      enableButton(registerButton, 'Register', 'bg-gray-400', 'bg-primary');
      alert(`An error occurred: ${e.message}`);
    }
  });
}
