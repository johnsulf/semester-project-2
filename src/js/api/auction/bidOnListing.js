import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

export async function bidOnListing(listingId, amount) {
  try {
    const response = await fetch(`${apiBase + listingsEp}/${listingId}/bids`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ amount }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
