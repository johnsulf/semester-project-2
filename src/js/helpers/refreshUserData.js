import { getUserProfile } from '../api/profile/getUserProfile.js';
import { save } from '../storage/save.js';
import { updateNav } from './updateNav.js';

export async function refreshUserData() {
  try {
    // Fetch the latest user profile data
    const userProfile = await getUserProfile();

    // Save the updated profile to localStorage
    save('profile', userProfile);

    // Update the navigation to reflect the new credits
    updateNav();

    return userProfile;
  } catch (error) {
    console.error('Error refreshing user data:', error);
    throw error;
  }
}
