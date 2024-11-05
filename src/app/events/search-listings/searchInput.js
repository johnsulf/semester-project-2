import { searchListings } from '../../api/auction/searchListings.js';
import { bouncer } from '../../components/loaders/bouncer.js';
import { listingEnded } from '../../helpers/bidOnListing.js';
import {
  showSearchResultsContainer,
  hideSearchResultsContainer,
} from '../../helpers/searchResults.js';
import { displaySearchResults } from '../../helpers/searchResults.js';

/**
 * Adds an input event listener to the search input field to handle live search functionality.
 *
 * This function implements a debounce mechanism to wait for a specified delay before sending
 * a search request. It displays a loading indicator while fetching results and updates the
 * search results container with the fetched listings. It also handles hiding the search results
 * when the input is cleared or when clicking outside the search area.
 *
 * @param {HTMLInputElement} searchInput - The search input element where users type their queries.
 * @param {HTMLElement} searchResultsContainer - The container element where search results will be displayed.
 *
 * @example
 * // Assuming you have elements with IDs 'searchInput' and 'searchResults'
 * const searchInput = document.getElementById('searchInput');
 * const searchResultsContainer = document.getElementById('searchResults');
 *
 * // Initialize the live search functionality
 * searchInputEventListener(searchInput, searchResultsContainer);
 */
export function searchInputEventListener(searchInput, searchResultsContainer) {
  let typingTimer;
  const typingDelay = 500; // Delay in milliseconds to wait before sending the search request
  searchInput.addEventListener('input', () => {
    clearTimeout(typingTimer); // Clear the previous timer

    // Show search results container if there is input
    if (searchInput.value.trim().length > 0) {
      showSearchResultsContainer();

      // Show loading bouncer while waiting for search results
      searchResultsContainer.innerHTML = bouncer();
    } else {
      hideSearchResultsContainer(); // Hide search results container if there is no input
      return;
    }

    // Start a new timer to send the search request
    typingTimer = setTimeout(async () => {
      const query = searchInput.value.trim();

      // If there is input, send the search request
      if (query.length > 0) {
        try {
          const results = await searchListings(query);
          const sortedResults = results.sort(
            (a, b) => listingEnded(a) - listingEnded(b),
          );
          displaySearchResults(sortedResults, searchResultsContainer);
        } catch (error) {
          console.error('Error fetching search listings:', error);
          searchResultsContainer.innerHTML =
            '<p class="text-error">An error occurred while fetching search results.</p>';
        }
      } else {
        searchResultsContainer.innerHTML = '';
        hideSearchResultsContainer();
      }
    }, typingDelay); // Wait for the specified delay before sending the search request
  });
}
