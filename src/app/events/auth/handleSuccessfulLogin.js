import { save } from '../../storage/save.js';
import { buildNav } from '../../components/nav/buildNav.js';
import { getUserProfile } from '../../api/profile/getUserProfile.js';

/**
 * Handles the actions to be performed after a successful login, including saving user data,
 * updating the navigation bar, and redirecting to the home view.
 *
 * This function performs the following steps:
 * 1. Saves the access token and user name to local storage.
 * 2. Fetches the user's profile data and saves it to local storage.
 * 3. Rebuilds the navigation bar to reflect the logged-in state.
 * 4. Redirects the user to the home view.
 *
 * @async
 * @param {Object} response - The response object received from the login API call.
 * @param {Object} response.data - The data object containing user information.
 * @param {string} response.data.accessToken - The access token received upon successful login.
 * @param {string} response.data.name - The name of the user.
 *
 * @returns {Promise<void>} - This function does not return a value.
 *
 * @example
 * // Assuming you have a response object from a successful login API call:
 * const response = {
 *   data: {
 *     accessToken: 'abcdef123456',
 *     name: 'JohnDoe'
 *   }
 * };
 * await handleSuccessfulLogin(response);
 */

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
