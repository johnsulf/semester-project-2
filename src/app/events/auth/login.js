import * as auth from '../../api/auth/index.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { handleErrors } from '../../helpers/handleErrors.js';
import { handleSuccessfulLogin } from '../../helpers/handleSuccessfulLogin.js';

// Function to add event listener to the login form
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
