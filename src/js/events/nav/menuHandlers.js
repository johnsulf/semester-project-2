export function menuHandlers(container) {
  const menu = container.querySelector('#userMenu');
  const avatarImg = container.querySelector('#avatarImg');
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
    if (!container.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });
}
