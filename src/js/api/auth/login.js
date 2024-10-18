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

export async function login(email, password) {
  try {
    const response = await fetch(`${apiBase + loginEp}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
}
