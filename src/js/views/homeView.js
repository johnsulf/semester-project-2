import { initLatestListingsCarousel } from '../events/listings/initLatestListingsCarousel.js';
import { initLiveSearch } from '../events/search-listings/initLiveSearch.js';

export async function homeView(app) {
  // Set the inner HTML of the app container
  app.innerHTML = `
    <section class="flex flex-col items-center">
      <h1 class="text-4xl font-bold my-8">Welcome to Fun Auction</h1>
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

    <section class="mt-12 bg-primary bg-opacity-20 py-6 px-4 rounded">
      <h2 class="text-2xl font-semibold mb-4">Latest added Listings</h2>
      <div id="latestListingsCarousel" class="relative">
        <!-- Carousel will be injected here -->
      </div>
    </section>
  `;

  // Initialize live search functionality
  initLiveSearch();

  // Fetch and display latest listings in the carousel
  await initLatestListingsCarousel();
}
