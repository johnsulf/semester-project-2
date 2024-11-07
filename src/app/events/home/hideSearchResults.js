import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

/**
 * Sets up an event listener to hide the search results container when the user clicks outside of it.
 *
 * This function listens for click events on the document. If the click occurs outside
 * the search results container and is not on the search input field, it calls
 * `hideSearchResultsContainer()` to hide the search results.
 *
 * @param {HTMLElement} searchResultsContainer - The DOM element representing the search results container.
 * @param {HTMLElement} searchInput - The DOM element representing the search input field.
 *
 * @example
 * // Setup hiding the search results when clicking outside
 * hideSearchResults(searchResultsContainer, searchInput);
 */

export function hideSearchResults(searchResultsContainer, searchInput) {
  document.addEventListener('click', (event) => {
    if (
      !searchResultsContainer.contains(event.target) &&
      event.target !== searchInput
    ) {
      hideSearchResultsContainer();
    }
  });
}
