import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { LISTINGS } from '../endpoints.js';

/**
 * Retrieves all active listings from the API, including seller and bid information, sorted by creation date.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of listing objects.
 *
 * @example
 * // Example usage
 * getListings()
 *   .then(listings => {
 *     console.log('Active Listings:', listings);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching listings:', error);
 *   });
 */
export async function getListings() {
  // Do a GET request to the API to get the listings
  try {
    const response = await fetch(
      `${API_BASE + LISTINGS}?_active=true&_seller=true&_bids=true&sort=created`,
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
