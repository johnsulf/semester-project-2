import { getUserProfile } from '../api/profile/getUserProfile.js';
import { save } from '../storage/save.js';
import { buildNav } from '../components/nav/nav.js';

// Function to refresh the user data after a change
export async function refreshUserData() {
  try {
    // Fetch the latest user profile data from the API
    const userProfile = await getUserProfile();

    // Save the updated profile to localStorage
    save('profile', userProfile);

    // Update the nav bar to reflect the new credits
    buildNav();

    // Return the updated user profile
    return userProfile;
  } catch (error) {
    console.error('Error refreshing user data:', error);
    throw error;
  }
}
