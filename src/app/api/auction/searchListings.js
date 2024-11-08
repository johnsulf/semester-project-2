import { API_BASE } from '../constants.js';
import { LISTINGS } from '../endpoints.js';
import { headers } from '../headers.js';

/**
 * Searches for listings based on a query string by sending a GET request to the API.
 *
 * @param {string} query - The search query string used to find listings.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of listing objects matching the search criteria.
 *
 * @example
 * // Example usage
 * searchListings('vintage clock')
 *   .then(listings => {
 *     console.log('Search results:', listings);
 *   })
 *   .catch(error => {
 *     console.error('Error searching listings:', error);
 *   });
 */
export async function searchListings(query) {
  // Do a GET request to the API to search for listings
  try {
    const response = await fetch(
      `${API_BASE + LISTINGS}/search?q=${encodeURIComponent(query)}&_seller=true&_bids=true`,
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
