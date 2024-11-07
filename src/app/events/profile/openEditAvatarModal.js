import { modalComponent } from '../../components/common/modalComponent.js';
import { editAvatarFormComponent } from '../../components/profile/editAvatarFormComponent.js';

/**
 * Initializes the event listener for the "Edit Avatar" button.
 *
 * This function selects the "Edit Avatar" button from the DOM and attaches a click event listener to it.
 * When the button is clicked, it opens the edit avatar modal by calling the `openEditAvatarModal` function.
 *
 * @function openEditAvatarModal
 *
 * @example
 * // Assuming you have a button with the ID 'editAvatarButton' in your HTML
 * openEditAvatarModal();
 */
export function openEditAvatarModal() {
  // Initialize event listener for the "Edit Avatar" button
  const editAvatarButton = document.getElementById('editAvatarButton');
  if (editAvatarButton) {
    editAvatarButton.addEventListener('click', () => {
      const modal = modalComponent(); // Create a modal
      const form = editAvatarFormComponent(modal); // Create the edit avatar form

      // Add the form to the modal content
      const modalContent = modal.querySelector('.modal-content');
      modalContent.appendChild(form);

      // Add the modal to the page
      document.body.appendChild(modal);
    });
  }
}
