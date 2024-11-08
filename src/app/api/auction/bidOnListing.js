import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { LISTINGS } from '../endpoints.js';

/**
 * Places a bid on a specific listing by sending a POST request to the API.
 *
 * @param {string} listingId - The ID of the listing to place a bid on.
 * @param {number} amount - The amount of the bid.
 * @returns {Promise<Object>} A promise that resolves to the result of the bid operation.
 *
 * @example
 * // Example usage
 * bidOnListing('listing123', 500)
 *   .then(result => {
 *     console.log('Bid placed successfully:', result);
 *   })
 *   .catch(error => {
 *     console.error('Error placing bid:', error);
 *   });
 */
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
