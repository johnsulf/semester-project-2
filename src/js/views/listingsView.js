import { searchListings } from '../api/auction/searchListings.js';
import { listingCardComponent } from '../components/listings/listingCardComponent.js';

export async function listingsView(app, query) {
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4">Search Results for "${query}"</h1>
    <div id="searchResults" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <p>Loading results...</p>
    </div>
  `;

  const searchResultsContainer = document.getElementById('searchResults');

  try {
    const results = await searchListings(query);
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }

    results.forEach((listing) => {
      const listingCard = listingCardComponent(listing);
      searchResultsContainer.appendChild(listingCard);
    });
  } catch (error) {
    searchResultsContainer.innerHTML = `<p class="text-error">Error loading search results: ${error.message}</p>`;
  }
}
