import { logoutListener } from '../auth/logout.js';

// Function that adds event listeners to different elements in the user menu
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
