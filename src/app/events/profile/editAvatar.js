import { modalComponent } from '../../components/common/modalComponent.js';
import { editAvatarFormComponent } from '../../components/profile/editAvatarFormComponent.js';

/**
 * Opens a modal dialog that allows the user to edit their avatar.
 *
 * This function performs the following steps:
 * 1. Creates a modal using the `modalComponent` function.
 * 2. Generates the edit avatar form using the `editAvatarFormComponent`, passing the modal as an argument.
 * 3. Appends the form to the modal's content area.
 * 4. Adds the modal to the document body, making it visible to the user.
 *
 * @function openEditAvatarModal
 *
 * @example
 * // To open the edit avatar modal, simply call the function:
 * openEditAvatarModal();
 */
export function openEditAvatarModal() {
  const modal = modalComponent(); // Create a modal

  const form = editAvatarFormComponent(modal); // Create the edit avatar form

  // Add the form to the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.appendChild(form);

  // Add the modal to the page
  document.body.appendChild(modal);
}
