import { logoutListener } from '../../events/auth/logout.js';
import { createListingEventListener } from '../../events/create-listing/createListing.js';

export function loggedInUserMenu(authSection, userData) {
  // Create a container for the avatar, menu and button
  const userContainer = document.createElement('div');
  userContainer.classList.add('relative', 'flex', 'items-center', 'gap-2');

  // Get avatar URL or placeholder
  const avatarUrl =
    userData.avatar && userData.avatar.url
      ? userData.avatar.url
      : 'https://via.placeholder.com/40';

  // Create the avatar image element
  const avatarImg = document.createElement('img');
  avatarImg.src = avatarUrl;
  avatarImg.alt = `${userData.name}'s avatar`;
  avatarImg.classList.add('w-10', 'h-10', 'rounded-full', 'cursor-pointer');

  // Create listing button
  const createListingBtn = document.createElement('button');
  createListingBtn.id = 'createListingBtn';
  createListingBtn.textContent = '+ Create Listing';
  createListingBtn.classList.add(
    'bg-primary',
    'text-white',
    'py-2',
    'px-4',
    'rounded',
  );

  // Append credits and avatar to the container
  userContainer.appendChild(createListingBtn);
  userContainer.appendChild(avatarImg);

  createListingEventListener(userContainer);

  // Create the dropdown menu (hidden by default)
  const menu = document.createElement('div');
  menu.classList.add(
    'absolute',
    'right-0',
    'top-10',
    'mt-2',
    'w-48',
    'bg-white',
    'rounded-md',
    'shadow-lg',
    'hidden',
    'z-50',
  );
  menu.innerHTML = `
    <p>${userData.name} - $${userData.credits}</p>
    <a href="#/profile" id="profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
    <a href="#" id="logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
  `;

  // Append the menu to the container
  userContainer.appendChild(menu);

  // Add event listener to toggle the menu when the avatar is clicked
  avatarImg.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    menu.classList.toggle('hidden');
  });

  // Close the menu when clicking the profile link
  const profileLink = menu.querySelector('#profile');
  profileLink.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!userContainer.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });

  // Clear the authSection and append the userContainer
  authSection.innerHTML = '';
  authSection.appendChild(userContainer);

  // Handle logout
  logoutListener();
}
