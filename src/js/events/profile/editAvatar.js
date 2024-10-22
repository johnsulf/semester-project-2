import { modalComponent } from '../../components/common/modalComponent.js';
import { updateUserProfile } from '../../api/profile/updateUserProfile.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';

export function openEditAvatarModal() {
  const modal = modalComponent();

  // Create the form
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  form.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Update Avatar</h2>
    <div>
      <label for="avatarUrl" class="block text-sm font-medium text-gray-700">Avatar URL</label>
      <input type="url" name="avatarUrl" id="avatarUrl" class="mt-1 p-2 border rounded w-full" required>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Update</button>
    </div>
  `;

  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const avatarUrl = form.avatarUrl.value.trim();

    // Prepare avatar object if avatar URL is provided
    const avatar = avatarUrl ? { url: avatarUrl } : null;

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

  // Add the form to the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.appendChild(form);

  // Append the modal to the body
  document.body.appendChild(modal);
}
