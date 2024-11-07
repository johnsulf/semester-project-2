import { hideSearchResults } from '../home/hideSearchResults.js';
import { searchInputEventListener } from './searchInput.js';
import {
  searchSubmitClickEventListener,
  searchSubmitEnterEventListener,
} from './searchSubmit.js';

/**
 * Initializes the live search functionality by setting up event listeners on the search input and search results container.
 *
 * This function performs the following actions:
 * 1. Selects the search input and search results container elements from the DOM.
 * 2. If both elements are found, it attaches various event listeners to handle live search interactions:
 *    - Handles input events on the search field.
 *    - Handles form submission via clicking the search button or pressing Enter.
 *    - Handles hiding the search results when clicking outside.
 *
 * @function initLiveSearch
 *
 * @example
 * // Initialize live search when the page loads
 * initLiveSearch();
 */
export function initLiveSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResults');

  if (!searchInput || !searchResultsContainer) {
    // Elements not found, do not proceed
    return;
  }

  // Add event listeners
  searchInputEventListener(searchInput, searchResultsContainer);
  searchSubmitEnterEventListener(searchInput);
  searchSubmitClickEventListener(searchInput);
  hideSearchResults(searchResultsContainer, searchInput);
}
