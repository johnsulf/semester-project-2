import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { LISTINGS } from '../endpoints.js';

// Function to place a bid on a listing
export async function bidOnListing(listingId, amount) {
  // Do a POST request to the API to place a bid on a listing
  try {
    const response = await fetch(`${API_BASE + LISTINGS}/${listingId}/bids`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ amount }),
    });

    const result = await response.json(); // Parse the JSON from the responses

    if (!response.ok) {
      throw new Error(result.errors[0].message);
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
