import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { PROFILES } from '../endpoints.js';

/**
 * Retrieves the user profile from the API based on the stored user name.
 *
 * @returns {Promise<Object>} A promise that resolves to the user profile data.
 *
 * @example
 * // Example usage
 * getUserProfile()
 *   .then(profile => {
 *     console.log('User Profile:', profile);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching user profile:', error);
 *   });
 */
export async function getUserProfile() {
  const name = load('name'); // Load the name from local storage

  // Do a GET request to the API to get the user profile
  try {
    const response = await fetch(
      `${API_BASE + PROFILES}/${name}?_listings=true&_wins=true`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    const data = await response.json(); // Parse the JSON from the response

    // Return the data
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
