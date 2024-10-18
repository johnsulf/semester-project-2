import { hideSearchResultsContainerOnClick } from '../../helpers/searchResults.js';
import { searchInputEventListener } from './searchInput.js';
import {
  searchSubmitClickEventListener,
  searchSubmitEnterEventListener,
} from './searchSubmit.js';

export function initLiveSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResults');

  if (!searchInput || !searchResultsContainer) {
    // Elements not found, do not proceed
    return;
  }

  searchInputEventListener(searchInput, searchResultsContainer);
  searchSubmitEnterEventListener(searchInput);
  searchSubmitClickEventListener(searchInput);
  hideSearchResultsContainerOnClick(searchResultsContainer, searchInput);
}
