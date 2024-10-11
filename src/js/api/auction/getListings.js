import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

export async function getListings() {
  try {
    const response = await fetch(
      `${apiBase + listingsEp}?_active=true&_seller=true&_bids=true&sort=created`,
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
