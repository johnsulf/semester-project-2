import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { profiles } from '../endpoints.js';

export async function getProfileBids() {
  const name = load('name');

  try {
    const response = await fetch(`${apiBase + profiles}/${name}/bids`, {
      method: 'GET',
      headers: headers('application/json'),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors ? data.errors[0].message : 'Failed to fetch user bids',
      );
    }
    return data;
  } catch (error) {
    console.error('Error fetching user bids:', error);
    throw error;
  }
}
