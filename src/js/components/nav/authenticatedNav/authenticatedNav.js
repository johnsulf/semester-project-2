import { createListingEventListener } from '../../../events/nav/create-listing/createListing.js';
import { menuHandlers } from '../../../events/nav/menuHandlers.js';
import { avatarImg } from './avatarImg.js';
import { createListingBtn } from './createListingBtn.js';
import { userMenu } from './userMenu.js';

export function authenticatedNav(authSection, userData) {
  // create a container for the content
  const container = document.createElement('div');
  container.classList.add('relative', 'flex', 'items-center', 'gap-2');

  // append the elements to the container
  container.appendChild(createListingBtn());
  container.appendChild(avatarImg(userData));
  container.appendChild(userMenu(userData));

  // event listeners
  createListingEventListener(container);
  menuHandlers(container);

  // clear authSection and append the new content
  authSection.innerHTML = '';
  authSection.appendChild(container);
}
