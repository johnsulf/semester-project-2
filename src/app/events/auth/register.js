import * as auth from '../../api/auth/index.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { handleSuccessfulLogin } from '../../helpers/handleSuccessfulLogin.js';
import { handleErrors } from '../../helpers/handleErrors.js';

// Function to add event listener to the register form
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
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const password = data.get('password').trim();
    const avatarUrl = data.get('avatar').trim();

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
