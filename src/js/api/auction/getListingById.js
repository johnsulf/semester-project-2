import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';

export async function getListingById(listingId) {
  const response = await fetch(
    `${apiBase + listingsEp}/${listingId}?_seller=true&_bids=true`,
    {
      method: 'GET',
      headers: headers('application/json'),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message || 'Failed to fetch listing');
  }

  const data = await response.json();
  return data.data;
}
