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
  try {
    // Build the request body
    const requestBody = { name, email, password };

    // Include avatar only if it's provided
    if (avatar) {
      requestBody.avatar = avatar;
    }

    const response = await fetch(`${apiBase + regEp}`, {
      method: 'POST',
      headers: headers('application/json', false),
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
