import { openEditAvatarModal } from './editAvatar.js';

export function openEditAvatarModalListener() {
  // Initialize event listener for the "Edit Avatar" button
  const editAvatarButton = document.getElementById('editAvatarButton');
  if (editAvatarButton) {
    editAvatarButton.addEventListener('click', () => {
      openEditAvatarModal();
    });
  }
}
