import { openEditAvatarModal } from './editAvatar.js';

// Function to initialize the event listener for the "Edit Avatar" button
export function openEditAvatarModalListener() {
  // Initialize event listener for the "Edit Avatar" button
  const editAvatarButton = document.getElementById('editAvatarButton');
  if (editAvatarButton) {
    editAvatarButton.addEventListener('click', () => {
      openEditAvatarModal(); // Open the edit avatar modal
    });
  }
}
