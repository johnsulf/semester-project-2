import { remove } from '../../storage/index.js';

/**
 * Logout the user
 * @example
 * logout();
 */

// Function to log out the user
export async function logout() {
  // Remove the token and profile from local storage
  try {
    remove('token');
    remove('profile');
  } catch (error) {
    throw new Error(error);
  }
}
