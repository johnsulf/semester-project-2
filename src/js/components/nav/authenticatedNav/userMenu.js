export function userMenu(userData) {
  const userMenu = document.createElement('div');
  userMenu.id = 'userMenu';
  userMenu.classList.add(
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
  userMenu.innerHTML = `
          <p>${userData.name} - $${userData.credits}</p>
          <a href="#/profile" id="profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
          <a href="#" id="logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
      `;
  return userMenu;
}
