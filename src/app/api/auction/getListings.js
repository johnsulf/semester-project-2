import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings } from '../endpoints.js';

// Function to get the listings
export async function getListings() {
  // Do a GET request to the API to get the listings
  try {
    const response = await fetch(
      `${apiBase + listings}?_active=true&_seller=true&_bids=true&sort=created`,
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
