import { apiBase } from '../constants.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { profiles } from '../endpoints.js';
import { profile } from '../auth/authState.js';

export async function updateUserProfile(avatarUrl) {
  const accessToken = load('token');
  if (!accessToken) {
    throw new Error('User is not authenticated.');
  }
  console.log(profile().name);
  try {
    const response = await fetch(`${apiBase + profiles}/${profile().name}`, {
      method: 'PUT',
      headers: headers('application/json'),
      body: JSON.stringify(avatarUrl),
    });

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      throw new Error(
        responseData.errors
          ? responseData.errors[0].message
          : 'Failed to update user profile',
      );
    }

    return responseData;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}
