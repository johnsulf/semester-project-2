import { menuHandlers } from '../../../events/nav/menuHandlers.js';
import { avatarImg } from './avatarImg.js';
import { userMenu } from './userMenu.js';
import { openCreateListingModal } from '../../../events/auction/openCreateListingModal.js';

/**
 * Builds the authenticated navigation bar by creating and appending the user's avatar, menu, and associated event listeners.
 *
 * This function performs the following steps:
 * 1. Creates a container element for the navigation bar.
 * 2. Appends the user's avatar image and user menu to the container.
 * 3. Attaches event handlers for menu interactions.
 * 4. Clears the existing content in the `authSection` and appends the new container.
 * 5. Adds an event listener for the "Create Listing" button within the user menu.
 *
 * @param {HTMLElement} authSection - The DOM element where the authenticated navigation elements will be inserted.
 * @param {Object} userData - The user's data object containing information like name, avatar URL, etc.
 *
 * @example
 * // Assuming you have an element with ID 'authSection' and a user data object
 * const authSection = document.getElementById('authSection');
 * const userData = {
 *   name: 'JohnDoe',
 *   avatarUrl: 'path/to/avatar.png',
 *   // other user data...
 * };
 *
 * // Build the authenticated navigation bar
 * authenticatedNav(authSection, userData);
 */
export function authenticatedNav(authSection, userData) {
  // Create a container element
  const container = document.createElement('div');
  container.classList.add('relative', 'flex', 'items-center', 'gap-2');

  // Append the user's avatar image and user menu to the container
  container.appendChild(avatarImg(userData));
  container.appendChild(userMenu(userData));

  // Attach event handlers for menu interactions
  menuHandlers(container);

  // Clear the existing content in the authSection and append the new container
  authSection.innerHTML = '';
  authSection.appendChild(container);

  // Add an event listener for the "Create Listing" button within the user menu
  openCreateListingModal(container, 'createListingBtn');
}
