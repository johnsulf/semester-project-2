import { searchListings } from '../../api/auction/searchListings.js';
import {
  showSearchResultsContainer,
  hideSearchResultsContainer,
} from '../../helpers/searchResults.js';
import { displaySearchResults } from '../../helpers/searchResults.js';

// Function to add an event listener to the search input
export function searchInputEventListener(searchInput, searchResultsContainer) {
  let typingTimer;
  const typingDelay = 500; // Delay in milliseconds to wait before sending the search request
  searchInput.addEventListener('input', () => {
    clearTimeout(typingTimer); // Clear the previous timer

    // Show search results container if there is input
    if (searchInput.value.trim().length > 0) {
      showSearchResultsContainer();

      // Show loading spinner while waiting for search results
      searchResultsContainer.innerHTML = `
              <div class="flex items-center justify-center p-4">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8"></div>
              </div>
            `;
    } else {
      hideSearchResultsContainer(); // Hide search results container if there is no input
      return;
    }

    // Start a new timer to send the search request
    typingTimer = setTimeout(async () => {
      const query = searchInput.value.trim();

      // If there is input, send the search request
      if (query.length > 0) {
        const results = await searchListings(query);
        displaySearchResults(results, searchResultsContainer);

        // If there is no input, clear the search results and hide the container
      } else {
        searchResultsContainer.innerHTML = '';
        hideSearchResultsContainer();
      }
    }, typingDelay); // Wait for the specified delay before sending the search request
  });
}
