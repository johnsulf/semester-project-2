import { searchListings } from '../../api/auction/searchListings.js';
import {
  showSearchResultsContainer,
  hideSearchResultsContainer,
} from '../../helpers/searchResults.js';
import { displaySearchResults } from '../../helpers/searchResults.js';

export function searchInputEventListener(searchInput, searchResultsContainer) {
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
}
