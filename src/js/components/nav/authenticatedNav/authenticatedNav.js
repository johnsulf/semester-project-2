import { menuHandlers } from '../../../events/nav/menuHandlers.js';
import { avatarImg } from './avatarImg.js';
import { userMenu } from './userMenu.js';
import { createListingEventListener } from '../../../events/nav/create-listing/createListing.js';

// Function to build the authenticated navigation bar
export function authenticatedNav(authSection, userData) {
  const container = document.createElement('div'); // Create a container element
  container.classList.add('relative', 'flex', 'items-center', 'gap-2'); // Add classes to the container

  // append the elements to the container
  container.appendChild(avatarImg(userData));
  container.appendChild(userMenu(userData));

  // event listeners
  menuHandlers(container);

  // clear authSection and append the new content
  authSection.innerHTML = '';
  authSection.appendChild(container);

  createListingEventListener(container, 'createListingBtn');
}
