import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

export async function getListingById(listingId) {
  try {
    const response = await fetch(
      `${apiBase + listingsEp}/${listingId}?_seller=true&_bids=true`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
}
