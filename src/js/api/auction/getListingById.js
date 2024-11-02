import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

// Function to get a listing by ID
export async function getListingById(listingId) {
  // Do a GET request to the API to get the listing by ID
  try {
    const response = await fetch(
      `${apiBase + listingsEp}/${listingId}?_seller=true&_bids=true`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    // Check if the response is OK
    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
}
