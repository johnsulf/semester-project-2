import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';

export async function getUserProfile() {
  const name = load('name');

  try {
    const response = await fetch(`${apiBase}/auction/profiles/${name}`, {
      method: 'GET',
      headers: headers('application/json'),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors ? data.errors[0].message : 'Failed to fetch user profile',
      );
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}
