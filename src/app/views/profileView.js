import { profile } from '../helpers/authState.js';
import { initAuctionWinsCarousel } from '../events/profile/initAuctionWinsCarousel.js';
import { initCreatedListingsCarousel } from '../events/profile/initCreatedListingsCarousel.js';
import { openEditAvatarModalListener } from '../events/profile/openEditAvatarModal.js';

/**
 * Renders the user profile view, displaying user information, created listings, and auction wins.
 * Initializes carousels for created listings and auction wins, and sets up the edit avatar modal.
 *
 * @async
 * @param {HTMLElement} app - The main application container where the profile view will be rendered.
 *
 * @example
 * // Assuming you have an element with the ID 'app' in your HTML
 * const appContainer = document.getElementById('app');
 *
 * // Render the profile view
 * profileView(appContainer);
 */
export async function profileView(app) {
  const user = profile(); // Get the user profile from local storage

  // Render the user profile
  app.innerHTML = `
      <h1>Hi, ${user.name}</h1>
      <section class="mt-4 bg-primary bg-opacity-20 py-6 px-4 rounded">
        <h2 class="mb-4">Profile</h2>
        <div class="flex flex-col md:flex-row justify-between md:justify-evenly">
          <div>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Credits:</strong> ${user.credits} $</p>
            <p><strong>Created Listings:</strong> ${user._count.listings}</p>
            <p><strong>Auction Wins:</strong> ${user._count.wins}</p>
          </div>
          <div class="flex flex-col justify-center items-center gap-1">
            ${
              user.avatar && user.avatar.url
                ? `<img 
                src="${user.avatar.url}" 
                alt="${user.name}'s avatar" 
                class="w-32 h-32 rounded-full">
              `
                : `<div class="w-32 h-32 rounded-full bg-gray-200"></div>`
            }
            <button 
              id="editAvatarButton" 
              class="bg-primary text-white px-4 py-2 rounded">
              Edit
            </button>
          </div>
        </div>
      </section>
      <section class="mt-4 bg-secondary bg-opacity-20 py-6 px-4 rounded">
        <h2 class="mb-4">Created Listings (${user._count.listings})</h2>
        <div id="createdListingsCarousel" class="carousel">
          <!-- Carousel will be injected here -->
        </div>
      </section>
      <section class="mt-4 bg-success bg-opacity-20 py-6 px-4 rounded">
        <h2 class="mb-4">Auction Wins (${user._count.wins})</h2>
        <div id="auctionWinsCarousel" class="carousel">
          <!-- Carousel will be injected here -->
        </div>
      </section>
  `;

  // Initialize the created listings carousel
  initCreatedListingsCarousel();

  // Initialize the auction wins carousel
  initAuctionWinsCarousel();

  // Add the event listener to the edit avatar button
  openEditAvatarModalListener();
}
