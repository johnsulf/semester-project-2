import { listingEnded } from '../../helpers/bidOnListing.js';
import { searchListings } from '../../api/auction/searchListings.js';
import { listingCardComponent } from '../../components/common/listingCardComponent.js';

/**
 * Populates the listings by fetching search results based on the query, sorting them, and displaying them in the provided container.
 *
 * @param {HTMLElement} searchResultsContainer - The container element where search results will be displayed.
 * @param {HTMLElement} bouncerContainer - The container element that displays a loading indicator or placeholder, which will be removed once results are fetched.
 * @param {string} query - The search query string used to fetch listings.
 * @returns {Promise<void>} A promise that resolves when the listings have been populated.
 *
 * @example
 * // Example usage
 * const searchContainer = document.getElementById('search-results');
 * const bouncer = document.getElementById('bouncer');
 * const query = 'laptops';
 * populateListings(searchContainer, bouncer, query);
 * // This will fetch listings for 'laptops', remove the bouncer, sort and display the listings.
 */
export async function populateListings(
  searchResultsContainer,
  bouncerContainer,
  query,
) {
  // Fetch and display search results
  try {
    const results = await searchListings(query);
    bouncerContainer.remove();

    // If no results are found, display a message
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }

    const sortedResults = results.sort((a, b) => {
      return listingEnded(a) - listingEnded(b);
    });

    // Display each listing in a card
    sortedResults.forEach((listing) => {
      const listingCard = listingCardComponent(listing);
      searchResultsContainer.appendChild(listingCard);
    });
  } catch (error) {
    bouncerContainer.remove();
    // Display an error message if the request fails
    searchResultsContainer.innerHTML = `<p class="text-error">Error loading search results: ${error.message}</p>`;
  }
}
