import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

// Function to get the latest listings
export async function getLatestListings(limit = 10) {
  // Do a GET request to the API to get the latest listings
  try {
    const response = await fetch(
      `${apiBase + listings}?_seller=true&_bids=true&sort=created&sortOrder=desc&limit=${limit}`,
      {
        method: 'GET',
        headers: headers('application/json'),
      },
    );

    // Check if the response is OK
    if (response.ok) {
      const result = await response.json();
      return result.data;
    } else {
      throw new Error('Failed to fetch latest listings');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
