import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { profiles } from '../endpoints.js';

// Function to get the user profile
export async function getUserProfile() {
  const name = load('name'); // Load the name from local storage

  // Do a GET request to the API to get the user profile
  try {
    const response = await fetch(`${apiBase + profiles}/${name}`, {
      method: 'GET',
      headers: headers('application/json'),
    });

    const data = await response.json(); // Parse the JSON from the response

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(
        data.errors ? data.errors[0].message : 'Failed to fetch user profile',
      );
    }

    // Return the data
    return data.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}
