import { apiBase } from '../constants.js';
import { register as regEp } from '../endpoints.js';
import { headers } from '../headers.js';

/**
 * Register a new user
 * @param {string} name - The name of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {object} avatar - The avatar of the user
 * @returns {Promise} - The response
 * @throws {Error} - The error
 * @example
 * register('Kalle_Kanin', 'kalle_kanin1234@stud.noroff.no', '12345678', {
 *  url: 'https://www.erlendjohnsen.com/assets/images/profile.png',
 *  alt: 'Profile image of Kalle Kanin',
 * });
 * @see {@link https://docs.noroff.dev/docs/v2/auth/register|Noroff API v2 | Auth | Register}
 */

// Function to register a new user
export async function register(name, email, password, avatar) {
  // Do a POST request to the API to register the user
  try {
    const response = await fetch(`${apiBase + regEp}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ name, email, password, avatar }),
    });

    // Check if the response is OK
    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
