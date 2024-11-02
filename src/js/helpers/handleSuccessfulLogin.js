import { save } from '../storage/save.js';
import { buildNav } from '../components/nav/nav.js';
import { getUserProfile } from '../api/profile/getUserProfile.js';

// Function to handle successful login
export async function handleSuccessfulLogin(response) {
  // Save the token and name to local storage
  save('token', response.data.accessToken);
  save('name', response.data.name);

  // Fetch the user profile and save it to local storage
  const userProfile = await getUserProfile();
  save('profile', userProfile);

  // Update the navbar to reflect login state
  buildNav();

  // Redirect to home view
  location.href = '#/';
}
