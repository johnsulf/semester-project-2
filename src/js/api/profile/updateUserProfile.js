import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { profiles } from '../endpoints.js';
import { profile } from '../auth/authState.js';

// Function to update the user profile
export async function updateUserProfile(avatarUrl) {
  const accessToken = load('token'); // Load the token from local storage

  // Check if the user is authenticated
  if (!accessToken) {
    throw new Error('User is not authenticated.');
  }

  // Do a PUT request to the API to update the user profile
  try {
    const response = await fetch(`${apiBase + profiles}/${profile().name}`, {
      method: 'PUT',
      headers: headers('application/json'),
      body: JSON.stringify(avatarUrl),
    });

    const responseData = await response.json(); // Parse the JSON from the response

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(
        responseData.errors
          ? responseData.errors[0].message
          : 'Failed to update user profile',
      );
    }

    // Return the response data
    return responseData;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}
