import { modalComponent } from '../../components/common/modalComponent.js';
import { editAvatarFormComponent } from '../../components/profile/editAvatarFormComponent.js';

export function openEditAvatarModal() {
  const modal = modalComponent();

  const form = editAvatarFormComponent(modal);

  // Add the form to the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.appendChild(form);

  // Append the modal to the body
  document.body.appendChild(modal);
}
