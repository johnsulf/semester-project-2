import { remove } from '../../storage/index.js';

/**
 * Logout the user
 * @example
 * logout();
 */

export async function logout() {
  try {
    remove('token');
    remove('profile');
  } catch (error) {
    throw new Error(error);
  }
}
