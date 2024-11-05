import { openEditAvatarModal } from './editAvatar.js';

/**
 * Initializes the event listener for the "Edit Avatar" button.
 *
 * This function selects the "Edit Avatar" button from the DOM and attaches a click event listener to it.
 * When the button is clicked, it opens the edit avatar modal by calling the `openEditAvatarModal` function.
 *
 * @function openEditAvatarModalListener
 *
 * @example
 * // Assuming you have a button with the ID 'editAvatarButton' in your HTML
 * openEditAvatarModalListener();
 */
export function openEditAvatarModalListener() {
  // Initialize event listener for the "Edit Avatar" button
  const editAvatarButton = document.getElementById('editAvatarButton');
  if (editAvatarButton) {
    editAvatarButton.addEventListener('click', () => {
      openEditAvatarModal(); // Open the edit avatar modal
    });
  }
}
