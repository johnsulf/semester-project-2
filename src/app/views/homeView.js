import { creditsAndActions } from '../components/home/creditsAndActions.js';
import { listingCategories } from '../components/home/listingCategories.js';
import { initLatestListingsCarousel } from '../events/listings/initLatestListingsCarousel.js';
import { initLiveSearch } from '../events/search-listings/initLiveSearch.js';

/**
 * Renders the home view of the application, including the search bar, credits and actions section,
 * listing categories, and the latest listings carousel. Initializes necessary functionalities
 * such as credits and actions, live search, and the latest listings carousel.
 *
 * @async
 * @param {HTMLElement} app - The main application container where the home view will be rendered.
 *
 * @example
 * // Assuming you have an element with the ID 'app' in your HTML
 * const appContainer = document.getElementById('app');
 *
 * // Render the home view
 * homeView(appContainer);
 */

export async function homeView(app) {
  // Set the inner HTML of the app container
  app.innerHTML = `
    <h1 class="text-center my-8">Welcome to Fun Auction</h1>
    <section class="flex flex-col items-center">
      <div class="w-full max-w-2xl relative">
        <div class="flex">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search for listings..." 
            class="w-full p-4 border border-gray-300 rounded-l-lg text-lg"
          />
          <button id="searchButton" class="bg-primary text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
        <div id="searchResults" class="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg z-10 hidden"></div>
      </div>
    </section>
    <hr class="my-4" />
    <section id="creditsAndActionsContainer" class="mt-4 bg-success bg-opacity-20 py-6 px-4 rounded">
      <!-- Credits And Actions content will be injected here -->
    </section>
    <section class="mt-4 bg-secondary bg-opacity-20 py-6 px-4 rounded">
      <h2 class="mb-4">Browse Categories</h2>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      ${listingCategories()}
    </section>
    <section class="mt-4 bg-primary bg-opacity-20 py-6 px-4 rounded">
      <h2 class="mb-4">Latest added Listings</h2>
      <div id="latestListingsCarousel" class="carousel">
        <!-- Carousel will be injected here -->
      </div>
    </section>
  `;

  // Initialize credits and actions section
  creditsAndActions();

  // Initialize live search functionality
  initLiveSearch();

  // Fetch and display latest listings in the carousel
  await initLatestListingsCarousel();
}
