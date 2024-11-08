import { API_BASE } from '../constants.js';
import { LISTINGS } from '../endpoints.js';
import { headers } from '../headers.js';

/**
 * Creates a new listing by sending a POST request to the API.
 *
 * @param {Object} data - The listing data to create.
 * @param {string} data.title - The title of the listing.
 * @param {string} data.description - The description of the listing.
 * @param {number} data.price - The price of the listing.
 * @param {Array<Object>} [data.media] - An optional array of media objects for the listing.
 * @param {string} data.media[].url - The URL of the media item.
 * @param {string} data.media[].alt - The alt text for the media item.
 * @returns {Promise<Object>} A promise that resolves to the created listing data.
 *
 * @example
 * // Example usage
 * const listingData = {
 *   title: 'Antique Vase',
 *   description: 'A beautiful antique vase from the 19th century.',
 *   price: 250.00,
 *   media: [
 *     { url: 'https://example.com/vase1.jpg', alt: 'Antique Vase Front View' },
 *     { url: 'https://example.com/vase2.jpg', alt: 'Antique Vase Side View' },
 *   ],
 * };
 * createListing(listingData)
 *   .then(createdListing => {
 *     console.log('Listing created successfully:', createdListing);
 *   })
 *   .catch(error => {
 *     console.error('Error creating listing:', error);
 *   });
 */
export async function createListing(data) {
  // Do a POST request to the API to create a listing
  try {
    const response = await fetch(`${API_BASE + LISTINGS}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(data),
    });

    const result = await response.json(); // Parse the JSON from the response

    if (!response.ok) {
      throw new Error(result.errors[0].message);
    }

    return result.data;
  } catch (error) {
    throw Error(error);
  }
}
