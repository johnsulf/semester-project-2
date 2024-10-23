import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';
import { load } from '../../storage/load.js';

// Function to place a bid on a listing
export async function bidOnListing(listingId, amount) {
  const accessToken = load('token'); // Load the access token from the storage

  // Check if the user is authenticated
  if (!accessToken) {
    throw new Error('User is not authenticated.');
  }

  // Do a POST request to the API to place a bid on a listing
  try {
    const response = await fetch(`${apiBase + listingsEp}/${listingId}/bids`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ amount }),
    });

    const result = await response.json(); // Parse the JSON from the response

    // Check if the response is OK
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
