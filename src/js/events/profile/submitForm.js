import { updateUserProfile } from '../../api/profile/updateUserProfile.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';

// Function to submit the edit avatar form
export async function submitEditAvatarFormListener(form, modal) {
  // Listen for the form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const avatarUrl = form.avatarUrl.value.trim();

    // Prepare avatar object if avatar URL is provided
    const avatar = avatarUrl ? { url: avatarUrl } : null;

    // Validate the avatar URL
    if (!avatar) {
      alert('Please enter a valid URL.');
      return;
    }

    try {
      // Call the API to update the user profile
      await updateUserProfile({ avatar: avatar });

      // Refresh user data to get the updated avatar
      await refreshUserData();

      // Close the modal
      modal.remove();

      // Reload the profile view
      window.location.reload();
    } catch (error) {
      alert(`Error updating avatar: ${error.message}`);
    }
  });
}
