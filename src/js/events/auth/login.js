import * as auth from '../../api/auth/index.js';
import { getUserProfile } from '../../api/profile/getUserProfile.js';
import { buildNav } from '../../components/nav/nav.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { save } from '../../storage/save.js';

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
    const email = data.get('email');
    const password = data.get('password');
    console.log(email);
    // Call the login function with the form data
    try {
      const response = await auth.login(email, password);

      if (response.errors) {
        enableButton(loginButton, 'Login', 'bg-gray-400', 'bg-primary');
        alert(`Login failed: ${response.errors[0].message}`);
        return;
      }
      // Save the token and name to local storage
      save('token', response.data.accessToken);
      save('name', response.data.name); // Save the user's name to use in the api call from getUserProfile()

      // Fetch the user profile and save it to local storage
      const userProfile = await getUserProfile();
      save('profile', userProfile);

      // Updates the navbar to reflect login state
      buildNav();

      // Redirects to home view
      location.href = '#/';
      // Shows success message
      alert('Login successful!');
    } catch (e) {
      alert(`An error occurred: ${e.message}`);
    }
  });
}
