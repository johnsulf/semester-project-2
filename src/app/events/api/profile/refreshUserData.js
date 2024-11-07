import { getUserProfile } from '../../../api/profile/getUserProfile.js';
import { save } from '../../../storage/save.js';
import { buildNav } from '../../../components/nav/buildNav.js';

/**
 * Refreshes the user's data by fetching the latest profile information from the API,
 * updates the local storage with the new profile data, rebuilds the navigation bar
 * to reflect any changes (e.g., updated credits), and returns the updated profile.
 *
 * This function is useful after actions that may alter the user's profile data,
 * such as placing a bid, updating profile information, or any transaction that affects
 * the user's state.
 *
 * @async
 * @returns {Promise<Object>} - A promise that resolves to the updated user profile object.
 *
 * @throws {Error} - Throws an error if the profile retrieval fails.
 *
 * @example
 * // After placing a bid, refresh the user data
 * try {
 *   const updatedProfile = await refreshUserData();
 *   console.log('Profile updated:', updatedProfile);
 * } catch (error) {
 *   console.error('Failed to refresh user data:', error);
 * }
 */

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
