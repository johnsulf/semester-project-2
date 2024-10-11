import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { listings } from '../endpoints.js';

export async function deleteListing(listingId) {
  try {
    const response = await fetch(`${apiBase + listings}/${listingId}`, {
      method: 'DELETE',
      headers: headers('application/json'),
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
