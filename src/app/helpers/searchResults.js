import { searchResultItem } from '../components/listings/searchResultItem.js';

/**
 * Shows the search results container by removing the 'hidden' class.
 *
 * This function targets the DOM element with the ID 'searchResults' and removes
 * the 'hidden' class to make it visible. It's typically used when displaying
 * search results in a UI after a user performs a search.
 *
 * @example
 * // After fetching and displaying search results
 * showSearchResultsContainer();
 */

export function showSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.remove('hidden');
}

/**
 * Hides the search results container by adding the 'hidden' class.
 *
 * This function targets the DOM element with the ID 'searchResults' and adds
 * the 'hidden' class to hide it from view. It's useful for hiding the search
 * results when they are no longer needed or when the user clicks outside the
 * search area.
 *
 * @example
 * // When clearing search results or resetting the search state
 * hideSearchResultsContainer();
 */

export function hideSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  if (searchResultsContainer) {
    searchResultsContainer.classList.add('hidden');
  }
}

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
 * hideSearchResultsContainerOnClick(searchResultsContainer, searchInput);
 */

export function hideSearchResultsContainerOnClick(
  searchResultsContainer,
  searchInput,
) {
  document.addEventListener('click', (event) => {
    if (
      !searchResultsContainer.contains(event.target) &&
      event.target !== searchInput
    ) {
      hideSearchResultsContainer();
    }
  });
}

/**
 * Displays search results in a specified container element.
 *
 * This function clears any existing content in the container, checks if there are results,
 * and either displays a 'No results found' message or appends a list of search result items
 * to the container.
 *
 * @param {Array<Object>} results - An array of search result objects (listings).
 * @param {HTMLElement} container - The DOM element where the search results will be displayed.
 *
 * @example
 * // After performing a search and obtaining results
 * displaySearchResults(results, searchResultsContainer);
 */

export function displaySearchResults(results, container) {
  container.innerHTML = ''; // Clear the existing search results

  // If no results are found, display a message
  if (results.length === 0) {
    container.innerHTML = '<p class="p-4 text-gray-500">No results found.</p>';
    return;
  }

  // Create a list of search result items
  const resultsList = document.createElement('ul');
  resultsList.classList.add('divide-y', 'divide-gray-200');

  // Add each search result item to the list
  results.forEach((listing) => {
    const resultItem = searchResultItem(listing);
    resultsList.appendChild(resultItem);
  });

  // Add the list to the container
  container.appendChild(resultsList);
}
