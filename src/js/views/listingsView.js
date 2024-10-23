import { searchListings } from '../api/auction/searchListings.js';
import { listingCardComponent } from '../components/listings/listingCardComponent.js';

export async function listingsView(app, query) {
  // Set the inner HTML of the app container
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4">Search Results for "${query}"</h1>
    <div id="searchResults" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <p>Loading results...</p>
    </div>
  `;

  const searchResultsContainer = document.getElementById('searchResults');

  // Fetch and display search results
  try {
    const results = await searchListings(query);
    searchResultsContainer.innerHTML = ''; // Clear the loading message

    // If no results are found, display a message
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }

    // Display each listing in a card
    results.forEach((listing) => {
      const listingCard = listingCardComponent(listing);
      searchResultsContainer.appendChild(listingCard);
    });
  } catch (error) {
    // Display an error message if the request fails
    searchResultsContainer.innerHTML = `<p class="text-error">Error loading search results: ${error.message}</p>`;
  }
}
