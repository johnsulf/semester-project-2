import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { LISTINGS } from '../endpoints.js';

/**
 * Retrieves a specific listing by its ID from the API.
 *
 * @param {string} listingId - The ID of the listing to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the listing data object.
 *
 * @example
 * // Example usage
 * getListingById('listing123')
 *   .then(listing => {
 *     console.log('Retrieved listing:', listing);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching listing:', error);
 *   });
 */
export async function getListingById(listingId) {
  // Do a GET request to the API to get the listing by ID
  try {
    const response = await fetch(
      `${API_BASE + LISTINGS}/${listingId}?_seller=true&_bids=true`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    const result = await response.json();

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
}
