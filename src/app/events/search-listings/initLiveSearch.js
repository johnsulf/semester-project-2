import { hideSearchResultsContainerOnClick } from '../../helpers/searchResults.js';
import { searchInputEventListener } from './searchInput.js';
import {
  searchSubmitClickEventListener,
  searchSubmitEnterEventListener,
} from './searchSubmit.js';

// Function to initialize the live search functionality
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
  hideSearchResultsContainerOnClick(searchResultsContainer, searchInput);
}
