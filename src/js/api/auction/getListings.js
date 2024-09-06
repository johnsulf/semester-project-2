import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings as listingsEp } from '../endpoints.js';
import { Listing } from '../../models/listing.js';

export async function getListings() {
  let listings = [];
  try {
    const response = await fetch(`${apiBase + listingsEp}`, {
      method: 'GET',
      headers: headers('application/json'),
    });

    if (response.ok) {
      const result = await response.json();
      listings = result.data.map((listing) => Listing.fromJson(listing));
      return listings;
    }
  } catch (error) {
    console.error(error);
  }
}
