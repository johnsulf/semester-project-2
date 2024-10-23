// Function to create the user menu
export function userMenu(userData) {
  const userMenu = document.createElement('div'); // Create the user menu container
  userMenu.id = 'userMenu'; // Set the user menu ID

  // Add classes and inner HTML to the user menu
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

  // Set the user menu inner HTML
  userMenu.innerHTML = `
    <div class="flex justify-between items-center">
        <p class="font-heading font-bold text-xl text-primary">${userData.name}</p>
        <div class="flex gap-1 items-center">
            <img src="src/assets/credits.png" alt="Coins" class="w-8 h-8" />
            <p class="font-bold text-lg">${userData.credits}.00</p>
        </div>
    </div>
    <hr class="m-2" />
    <a href="#/profile" id="profile" class="flex gap-1 items-center p-2 rounded-md hover:bg-gray-100">
        <img src="src/assets/settings.png" alt="Coins" class="w-6 h-6" />
        Profile Settings
    </a>
    <a href="#" id="logout" class=" text-error flex gap-1 items-center p-2 rounded-md hover:bg-error hover:text-white">
        <img src="src/assets/logout.png" alt="Coins" class="w-6 h-6" />
        Log Out
    </a>
      `;

  return userMenu;
}
