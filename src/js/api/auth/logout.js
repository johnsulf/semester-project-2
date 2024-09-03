import { remove } from '../../storage/index.js';

export async function logout() {
  try {
    remove('token');
    remove('profile');
  } catch (error) {
    console.error(error);
  }
}

logout();
