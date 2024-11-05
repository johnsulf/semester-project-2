import { updateUserProfile } from '../../api/profile/updateUserProfile.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';

/**
 * Attaches a submit event listener to the edit avatar form to handle avatar updates.
 *
 * This function performs the following actions:
 * 1. Prevents the default form submission behavior.
 * 2. Disables the update button and updates its text to indicate the update process is ongoing.
 * 3. Validates the provided avatar URL.
 * 4. Calls the API to update the user's profile with the new avatar.
 * 5. Refreshes the user data to reflect the updated avatar.
 * 6. Closes the modal and reloads the profile view upon successful update.
 * 7. Handles any errors that occur during the update process by re-enabling the button and alerting the user.
 *
 * @async
 * @function submitEditAvatarFormListener
 * @param {HTMLFormElement} form - The form element for editing the avatar.
 * @param {HTMLElement} modal - The modal element containing the form.
 *
 * @example
 * // Assuming you have a form element and a modal element
 * const form = document.getElementById('editAvatarForm');
 * const modal = document.getElementById('editAvatarModal');
 *
 * // Initialize the form submission listener
 * submitEditAvatarFormListener(form, modal);
 */
export async function submitEditAvatarFormListener(form, modal) {
  const updateAvatarBtn = form.querySelector('#updateBtn');

  // Listen for the form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    const avatarUrl = form.avatarUrl.value.trim();

    // Prepare avatar object if avatar URL is provided
    const avatar = avatarUrl ? { url: avatarUrl } : null;

    // Validate the avatar URL
    if (!avatar) {
      alert('Please enter a valid URL.');
      return;
    }

    // Disable the update button and change its appearance
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

      // Reload the profile view to reflect changes
      window.location.reload();
    } catch (error) {
      // Re-enable the update button and restore its appearance
      enableButton(updateAvatarBtn, 'Update', 'bg-gray-400', 'bg-primary');
      alert(`Error updating avatar: ${error.message}`);
    }
  });
}
