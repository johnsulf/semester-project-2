import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings } from '../endpoints.js';

// Function to delete a listing
export async function deleteListing(listingId) {
  // Do a DELETE request to the API to delete a listing
  try {
    const response = await fetch(`${apiBase + listings}/${listingId}`, {
      method: 'DELETE',
      headers: headers('application/json'),
    });

    // Check if the response is OK
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
