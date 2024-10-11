import { createListingEventListener } from '../events/create-listing/createListing.js';
import { getLatestListings } from '../api/auction/getLatestListings.js';
import { carouselComponent } from '../components/listings/carouselComponent.js';
import { searchListings } from '../api/auction/searchListings.js';
import { listingCardComponent } from '../components/listings/listingCardComponent.js';

export async function homeView(app) {
  app.innerHTML = `
    <section class="flex flex-col items-center">
      <h1 class="text-4xl font-bold my-8">Welcome to Trust Auction House</h1>
      <div class="w-full max-w-2xl">
        <div class="flex">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search for listings..." 
            class="w-full p-4 border rounded-l-lg text-lg"
          />
          <button id="searchButton" class="bg-primary text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
        <div id="searchResults" class="mt-4"></div>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Latest Listings</h2>
      <div id="latestListingsCarousel" class="relative">
        <!-- Carousel will be injected here -->
      </div>
    </section>
  `;

  // Initialize the create listing event listener (if needed)
  createListingEventListener(app);

  // Initialize live search functionality
  initLiveSearch();

  // Fetch and display latest listings in the carousel
  await initLatestListingsCarousel();
}

async function initLatestListingsCarousel() {
  const carouselContainer = document.getElementById('latestListingsCarousel');

  try {
    const listings = await getLatestListings(10);
    if (listings.length === 0) {
      carouselContainer.innerHTML = '<p>No listings available.</p>';
      return;
    }

    const carousel = carouselComponent(listings);
    carouselContainer.appendChild(carousel);
  } catch (error) {
    carouselContainer.innerHTML = `<p class="text-error">Error loading latest listings: ${error.message}</p>`;
  }
}

function initLiveSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResults');

  let typingTimer;
  const typingDelay = 500; // Delay in milliseconds

  searchInput.addEventListener('input', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(async () => {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        const results = await searchListings(query);
        displaySearchResults(results, searchResultsContainer);
      } else {
        searchResultsContainer.innerHTML = '';
      }
    }, typingDelay);
  });

  // Optional: Handle Enter key to navigate to listingView
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query.length > 0) {
        window.location.hash = `#/search/${encodeURIComponent(query)}`;
      }
    }
  });

  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      window.location.hash = `#/search/${encodeURIComponent(query)}`;
    }
  });
}

function displaySearchResults(results, container) {
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<p>No results found.</p>';
    return;
  }

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('grid', 'grid-cols-1', 'gap-6');

  results.forEach((listing) => {
    const listingCard = listingCardComponent(listing);
    resultsContainer.appendChild(listingCard);
  });

  container.appendChild(resultsContainer);
}
