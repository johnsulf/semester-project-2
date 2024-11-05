import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

// Function to create a listing
export async function createListing(data) {
  // Do a POST request to the API to create a listing
  try {
    const response = await fetch(`${apiBase + listings}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(data),
    });

    const result = await response.json(); // Parse the JSON from the response

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
}