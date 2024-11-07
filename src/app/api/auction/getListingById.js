import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { LISTINGS } from '../endpoints.js';

// Function to get a listing by ID
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
