import { apiBase } from '../constants.js';
import { listings } from '../endpoints.js';
import { headers } from '../headers.js';

export async function createListing(data) {
  try {
    const response = await fetch(`${apiBase + listings}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.errors
          ? errorData.errors[0].message
          : 'Failed to create listing',
      );
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
