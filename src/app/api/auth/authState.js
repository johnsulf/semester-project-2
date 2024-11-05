import { load } from '../../storage/index.js';

/**
 * Determines whether the user is currently logged in by checking for the presence of an authentication token.
 *
 * This function retrieves the 'token' from local storage using the `load` function and returns a boolean
 * indicating whether the token exists. It is used to verify the authentication state of the user.
 *
 * @returns {boolean} - Returns `true` if the user is logged in (token exists), otherwise `false`.
 *
 * @example
 * // Usage example:
 * if (isLoggedIn()) {
 *   // User is logged in
 * } else {
 *   // User is not logged in
 * }
 */
export const isLoggedIn = () => Boolean(load('token'));

/**
 * Retrieves the user's profile information from local storage.
 *
 * This function loads the 'profile' data using the `load` function and returns it. The profile typically
 * contains user details such as name, email, credits, and other relevant information.
 *
 * @returns {Object|null} - Returns the user profile object if it exists, otherwise `null`.
 *
 * @example
 * // Usage example:
 * const userProfile = profile();
 * if (userProfile) {
 *   console.log(userProfile.name);
 * }
 */
export const profile = () => load('profile');
