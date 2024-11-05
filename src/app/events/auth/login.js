import * as auth from '../../api/auth/index.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { handleErrors } from '../../helpers/handleErrors.js';
import { handleSuccessfulLogin } from '../../helpers/handleSuccessfulLogin.js';

/**
 * Adds a submit event listener to the login form to handle user authentication.
 *
 * This function performs the following actions:
 * 1. Prevents the default form submission behavior.
 * 2. Disables the login button and updates its text to indicate that the login process is ongoing.
 * 3. Collects the email and password from the form inputs.
 * 4. Attempts to log in the user using the provided credentials.
 * 5. Handles any errors that occur during the login process.
 * 6. On successful login, handles post-login actions such as updating the navigation bar and redirecting the user.
 *
 * @async
 * @function loginEventListener
 * @returns {Promise<void>} - A promise that resolves when the event listener is set up.
 *
 * @example
 * // Initialize the login event listener after rendering the login form
 * loginEventListener();
 */
export async function loginEventListener() {
  const form = document.getElementById('login-form');
  const loginButton = document.getElementById('loginBtn');

  // Add event listener to the form
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    disableButton(loginButton, 'Logging in...', 'bg-primary', 'bg-gray-400');

    // Collect form data
    const data = new FormData(form);
    const email = data.get('email').trim();
    const password = data.get('password').trim();

    try {
      // Call the login function with the form data
      const response = await auth.login(email, password);

      // handle errors
      if (handleErrors(response, loginButton, 'Login')) return;

      // Handle successful login
      await handleSuccessfulLogin(response);
    } catch (e) {
      enableButton(loginButton, 'Login', 'bg-gray-400', 'bg-primary');
      alert(`An error occurred: ${e.message}`);
    }
  });
}
