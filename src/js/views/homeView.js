import { createListingEventListener } from '../events/create-listing/createListing.js';
import { searchListings } from '../api/auction/searchListings.js';
import { initLatestListingsCarousel } from '../events/listings/initLatestListingsCarousel.js';

export async function homeView(app) {
  app.innerHTML = `
    <section class="flex flex-col items-center">
      <h1 class="text-4xl font-bold my-8">Welcome to Trust Auction House</h1>
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

    <section class="mt-64">
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

function initLiveSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResults');

  let typingTimer;
  const typingDelay = 500; // Delay in milliseconds

  searchInput.addEventListener('input', () => {
    clearTimeout(typingTimer);

    if (searchInput.value.trim().length > 0) {
      showSearchResultsContainer();

      // Show loading spinner
      searchResultsContainer.innerHTML = `
        <div class="flex items-center justify-center p-4">
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8"></div>
        </div>
      `;
    } else {
      hideSearchResultsContainer();
      return;
    }

    typingTimer = setTimeout(async () => {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        const results = await searchListings(query);
        displaySearchResults(results, searchResultsContainer);
      } else {
        searchResultsContainer.innerHTML = '';
        hideSearchResultsContainer();
      }
    }, typingDelay);
  });

  // Optional: Handle Enter key to navigate to listingView
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query.length > 0) {
        hideSearchResultsContainer();
        window.location.hash = `#/search/${encodeURIComponent(query)}`;
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (
      !searchResultsContainer.contains(event.target) &&
      event.target !== searchInput
    ) {
      hideSearchResultsContainer();
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
    container.innerHTML = '<p class="p-4 text-gray-500">No results found.</p>';
    return;
  }

  const resultsList = document.createElement('ul');
  resultsList.classList.add('divide-y', 'divide-gray-200');

  results.forEach((listing) => {
    const resultItem = createSearchResultItem(listing);
    resultsList.appendChild(resultItem);
  });

  container.appendChild(resultsList);
}

function showSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.remove('hidden');
}

function hideSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.add('hidden');
}

function createSearchResultItem(listing) {
  const item = document.createElement('li');
  item.classList.add(
    'p-4',
    'flex',
    'items-center',
    'cursor-pointer',
    'hover:bg-gray-100',
  );

  item.addEventListener('click', () => {
    hideSearchResultsContainer();
    window.location.hash = `#/listing/${listing.id}`;
  });

  const media =
    listing.media && listing.media.length > 0
      ? listing.media
      : [
          {
            url: 'https://via.placeholder.com/60',
            alt: 'Placeholder image',
          },
        ];

  item.innerHTML = `
    <img src="${media[0].url}" alt="${media[0].alt}" class="w-12 h-12 object-cover rounded mr-4" />
    <div class="flex-1">
      <h3 class="text-gray-900 font-medium">${listing.title}</h3>
    </div>
    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  `;

  return item;
}
