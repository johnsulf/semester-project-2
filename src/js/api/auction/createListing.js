import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

export async function createListing(data) {
  console.log(data);
  try {
    const response = await fetch(`${apiBase + listings}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(data),
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
