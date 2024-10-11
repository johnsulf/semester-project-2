import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

export async function searchListings(query) {
  try {
    const response = await fetch(
      `${apiBase + listings}/search?q=${encodeURIComponent(query)}&_seller=true&_bids=true`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    if (response.ok) {
      const result = await response.json();
      return result.data;
    } else {
      throw new Error('Failed to fetch search results');
    }
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}
