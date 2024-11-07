import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { profiles } from '../endpoints.js';
import { profile } from '../auth/authState.js';

// Function to update the user profile
export async function updateUserProfile(avatarUrl) {
  // Do a PUT request to the API to update the user profile
  try {
    const response = await fetch(`${apiBase + profiles}/${profile().name}`, {
      method: 'PUT',
      headers: headers('application/json'),
      body: JSON.stringify(avatarUrl),
    });

    const result = await response.json(); // Parse the JSON from the response

    // Return the response data
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
