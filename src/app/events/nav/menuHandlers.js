import { logoutListener } from '../auth/logout.js';

/**
 * Adds event listeners to various elements within the user menu, enabling interactive behaviors such as toggling the menu visibility,
 * handling profile navigation, and logging out.
 *
 * This function performs the following actions:
 * 1. Toggles the visibility of the user menu when the avatar image is clicked.
 * 2. Closes the user menu when the profile link is clicked.
 * 3. Closes the user menu when a click occurs outside of the menu.
 * 4. Attaches a logout event listener to the logout button.
 *
 * @param {HTMLElement} container - The container element that holds the user menu and related elements.
 *
 * @example
 * // Assuming you have a container element that includes the avatar image and user menu
 * const container = document.querySelector('.user-menu-container');
 *
 * // Initialize the menu handlers
 * menuHandlers(container);
 */
export function menuHandlers(container) {
  // Get the menu elements
  const menu = container.querySelector('#userMenu');
  const avatarImg = container.querySelector('#avatarImg');
  const logoutBtn = container.querySelector('#logout');

  // Add event listener to toggle the menu when the avatar is clicked
  avatarImg.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    menu.classList.toggle('hidden');
  });

  // Close the menu when clicking the profile link
  const profileLink = menu.querySelector('#profile');
  profileLink.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!container.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });

  // Add event listener to the logout button
  logoutListener(logoutBtn);
}
