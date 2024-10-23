import * as auth from '../../api/auth/index.js';
import { getUserProfile } from '../../api/profile/getUserProfile.js';
import { buildNav } from '../../components/nav/nav.js';
import { save } from '../../storage/save.js';

// Function to add event listener to the login form
export async function loginEventListener() {
  const form = document.getElementById('login-form');

  // Add event listener to the form
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted

    // Collect form data
    const data = new FormData(form);
    const email = data.get('email');
    const password = data.get('password');

    // Call the login function with the form data
    try {
      const response = await auth.login(email, password);

      // Check for errors in the response
      if (response.errors) {
        alert(`Login failed: ${response.errors[0].message}`);
        return;
      }

      // Save the token and name to local storage
      save('token', response.accessToken);
      save('name', response.name); // Save the user's name to use in the api call from getUserProfile()

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
      console.error(e);
    }
  });
}
