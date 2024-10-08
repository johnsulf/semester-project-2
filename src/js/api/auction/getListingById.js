import { apiBase } from '../constants.js';
import { load } from '../../storage/index.js';

export async function getListingById(listingId) {
  const token = load('token');

  const response = await fetch(
    `${apiBase}/auction/listings/${listingId}?_seller=true&_bids=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include the token if authentication is required
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message || 'Failed to fetch listing');
  }

  const data = await response.json();
  return data.data;
}
