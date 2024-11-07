import { API_BASE } from '../constants.js';
import { headers } from '../headers.js';
import { PROFILES } from '../endpoints.js';
import { profile } from '../../helpers/authState.js';

// Function to update the user profile
export async function updateUserProfile(avatarUrl) {
  // Do a PUT request to the API to update the user profile
  try {
    const response = await fetch(`${API_BASE + PROFILES}/${profile().name}`, {
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
