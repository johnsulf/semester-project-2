import { submitEditAvatar } from '../../events/api/profile/submitForm.js';

/**
 * Creates the edit avatar form component within a modal.
 *
 * This function generates a form that allows users to update their avatar by providing a new avatar URL.
 * It includes input validation and attaches an event listener to handle form submission.
 *
 * @param {HTMLElement} modal - The modal element where the form will be displayed.
 * @returns {HTMLFormElement} - The DOM element representing the edit avatar form.
 *
 * @example
 * // Assuming you have a modal element
 * const modal = document.createElement('div');
 *
 * // Create the edit avatar form component
 * const editAvatarForm = editAvatarFormComponent(modal);
 *
 * // Append the form to the modal's content area
 * modal.querySelector('.modal-content').appendChild(editAvatarForm);
 *
 * // Append the modal to the document body to display it
 * document.body.appendChild(modal);
 */
export function editAvatarFormComponent(modal) {
  const form = document.createElement('form'); // Create the form element
  form.classList.add('space-y-4'); // Add spacing between form elements

  // Set the form's inner HTML structure
  form.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Update Avatar</h2>
    <div>
      <label for="avatarUrl" class="block text-sm font-medium text-gray-700">Avatar URL</label>
      <input 
        type="url" 
        name="avatarUrl" 
        id="avatarUrl" 
        class="mt-1 p-2 border rounded w-full" 
        placeholder="https://example.com/avatar.jpg"
        required
        pattern="https?://.+"
        title="Please enter a valid URL starting with http:// or https://"
      >
    </div>
    <div class="flex justify-end">
      <button 
        type="submit" 
        id="updateBtn" 
        class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Update
      </button>
    </div>
  `;

  // Attach the form submission event listener
  submitEditAvatar(form, modal);

  return form;
}
