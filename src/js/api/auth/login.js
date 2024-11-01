import { apiBase } from '../constants.js';
import { login as loginEp } from '../endpoints.js';
import { headers } from '../headers.js';

/**
 * Login a user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @returns {Promise} - The profile of the user
 * @example
 * login('kalle_kanin@stud.noroff.no', '12345678');
 * @see {@link https://docs.noroff.dev/docs/v2/auth/login|Noroff API v2 | Auth | Login}
 */

// Function to log in a user
export async function login(email, password) {
  // Do a POST request to the API to log in the user
  try {
    console.log(password);
    const response = await fetch(`${apiBase + loginEp}`, {
      method: 'POST',
      headers: headers('application/json', false),
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
