import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';
import { load } from '../../storage/load.js';

export async function bidOnListing(listingId, amount) {
  const accessToken = load('token');
  if (!accessToken) {
    throw new Error('User is not authenticated.');
  }

  try {
    const response = await fetch(`${apiBase + listingsEp}/${listingId}/bids`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ amount }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.errors ? result.errors[0].message : 'Failed to place bid.',
      );
    }

    return result;
  } catch (error) {
    console.error('Error placing bid:', error);
    throw error;
  }
}
