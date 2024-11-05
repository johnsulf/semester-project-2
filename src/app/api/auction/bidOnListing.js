import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

// Function to place a bid on a listing
export async function bidOnListing(listingId, amount) {
  // Do a POST request to the API to place a bid on a listing
  try {
    const response = await fetch(`${apiBase + listingsEp}/${listingId}/bids`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ amount }),
    });

    const result = await response.json(); // Parse the JSON from the responses

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
