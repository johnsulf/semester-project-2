import { updateUserProfile } from '../../api/profile/updateUserProfile.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';

// Function to submit the edit avatar form
export async function submitEditAvatarFormListener(form, modal) {
  const updateAvatarBtn = form.querySelector('#updateBtn');
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

    disableButton(
      updateAvatarBtn,
      'Updating Avatar...',
      'bg-primary',
      'bg-gray-400',
    );

    try {
      // Call the API to update the user profile
      await updateUserProfile({ avatar: avatar });

      // Refresh user data to get the updated avatar
      await refreshUserData();

      // Close the modal
      modal.remove();
      alert('Avatar updated successfully!');
      // Reload the profile view
      window.location.reload();
    } catch (error) {
      enableButton(updateAvatarBtn, 'Update', 'bg-gray-400', 'bg-primary');
      alert(`Error updating avatar: ${error.message}`);
    }
  });
}
