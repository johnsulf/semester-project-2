import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

// Function to search listings
export async function searchListings(query) {
  // Do a GET request to the API to search for listings
  try {
    const response = await fetch(
      `${apiBase + listings}/search?q=${encodeURIComponent(query)}&_seller=true&_bids=true`,
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
