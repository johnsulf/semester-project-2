import { modalComponent } from '../../components/common/modalComponent.js';
import { editAvatarFormComponent } from '../../components/profile/editAvatarFormComponent.js';

// Function to open the edit avatar modal
export function openEditAvatarModal() {
  const modal = modalComponent(); // Create a modal

  const form = editAvatarFormComponent(modal); // Create the edit avatar form

  // Add the form to the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.appendChild(form);

  // Add the modal to the page
  document.body.appendChild(modal);
}
