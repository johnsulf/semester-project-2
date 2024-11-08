import { API_BASE } from '../constants.js';
import { LISTINGS } from '../endpoints.js';
import { headers } from '../headers.js';

/**
 * Retrieves the latest listings from the API.
 *
 * @param {number} [limit=10] - The maximum number of listings to retrieve.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of the latest listing objects.
 *
 * @example
 * // Example usage
 * getLatestListings(5)
 *   .then(listings => {
 *     console.log('Latest Listings:', listings);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching latest listings:', error);
 *   });
 */
export async function getLatestListings(limit = 10) {
  // Do a GET request to the API to get the latest listings
  try {
    const response = await fetch(
      `${API_BASE + LISTINGS}?_seller=true&_bids=true&sort=created&sortOrder=desc&limit=${limit}`,
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
