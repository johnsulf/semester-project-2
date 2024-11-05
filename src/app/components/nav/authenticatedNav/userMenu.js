import { createListingBtn } from '../../common/createListingBtn.js';

// Function to create the user menu
export function userMenu(userData) {
  const userMenu = document.createElement('div'); // Create the user menu container
  userMenu.id = 'userMenu'; // Set the user menu ID

  // Add classes to the user menu
  userMenu.classList.add(
    'absolute',
    'right-0',
    'top-10',
    'mt-3',
    'p-2',
    'w-64',
    'border',
    'border-gray-300',
    'bg-white',
    'rounded-md',
    'shadow-lg',
    'hidden',
    'z-50',
  );

  // Set the initial inner HTML of the user menu (up to where the button goes)
  userMenu.innerHTML = `
    <div class="flex justify-between items-center">
      <p class="font-heading font-bold text-xl text-primary">${userData.name}</p>
      <div class="flex gap-1 items-center">
        <img src="src/assets/credits.png" alt="Coins" class="w-8 h-8" />
        <p class="font-bold text-lg">${userData.credits}.00</p>
      </div>
    </div>
    <hr class="m-2" />
  `;

  // Now, append the create listing button
  const createListingButton = createListingBtn('createListingBtn');
  createListingButton.classList.add('w-full', 'my-2');
  userMenu.appendChild(createListingButton);

  // Then, append the rest of the elements
  const menuLinks = `
    <a href="#/profile" id="profile" class="flex gap-1 items-center p-2 rounded-md hover:bg-gray-100">
      <p class="w-6 h-6">👤</p>
      Profile
    </a>
    <a href="#" id="logout" class="text-error flex gap-1 items-center p-2 rounded-md hover:bg-error hover:text-white">
      <img src="src/assets/logout.png" alt="Logout Icon" class="w-6 h-6" />
      Log Out
    </a>
  `;

  // Append the remaining HTML
  userMenu.insertAdjacentHTML('beforeend', menuLinks);

  return userMenu;
}