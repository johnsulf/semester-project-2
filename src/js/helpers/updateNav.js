// src/js/helpers/updateNav.js

import { isLoggedIn } from '../api/auth/authState.js';
import { logoutListener } from '../events/auth/logout.js';

export function updateNav() {
  const authLink = document.getElementById('auth-link');

  if (isLoggedIn()) {
    // Get user data
    const userData = JSON.parse(localStorage.getItem('profile'));

    // Get avatar URL or placeholder
    const avatarUrl =
      userData.avatar && userData.avatar.url
        ? userData.avatar.url
        : 'https://via.placeholder.com/40'; // Placeholder image URL

    // Create the avatar image element
    const avatarImg = document.createElement('img');
    avatarImg.src = avatarUrl;
    avatarImg.alt = `${userData.name}'s avatar`;
    avatarImg.classList.add('w-8', 'h-8', 'rounded-full', 'cursor-pointer');

    // Create a container for the avatar and menu
    const avatarContainer = document.createElement('div');
    avatarContainer.classList.add('relative');

    // Append the avatar image to the container
    avatarContainer.appendChild(avatarImg);

    // Create the dropdown menu (hidden by default)
    const menu = document.createElement('div');
    menu.classList.add(
      'absolute',
      'right-0',
      'mt-2',
      'w-48',
      'bg-white',
      'rounded-md',
      'shadow-lg',
      'hidden',
      'z-50',
    );
    menu.innerHTML = `
      <a href="#/profile" id="profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
      <a href="#" id="logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
    `;

    // Append the menu to the container
    avatarContainer.appendChild(menu);

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
      if (!avatarContainer.contains(event.target)) {
        menu.classList.add('hidden');
      }
    });

    // Clear the authLink and append the avatarContainer
    authLink.innerHTML = '';
    authLink.appendChild(avatarContainer);

    // Handle logout
    logoutListener();
  } else {
    // Show "Log In/Register" if not logged in
    authLink.innerHTML = `
      <a href="#/login" class="text-white mr-4">Log In</a>
      <a href="#/register" class="text-white">Register</a>
    `;
  }
}
