import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

/**
 * Adds a keydown event listener to the search input that listens for the Enter key.
 * When Enter is pressed, it prevents the default form submission, hides the search results,
 * and redirects the user to the search results page with the entered query.
 *
 * @param {HTMLInputElement} searchInput - The search input element where users type their queries.
 *
 * @example
 * // Assuming you have an input element with the ID 'searchInput'
 * const searchInput = document.getElementById('searchInput');
 * searchSubmitEnterEventListener(searchInput);
 */
export function searchSubmitEnterEventListener(searchInput) {
  // Listen for the Enter key to submit the search query
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the form from being submitted
      const query = searchInput.value.trim();
      if (query.length > 0) {
        hideSearchResultsContainer();
        window.location.hash = `#/search/${encodeURIComponent(query)}`; // Redirect to the search results page
      }
    }
  });
}

/**
 * Adds a click event listener to the search submit button.
 * When the button is clicked, it retrieves the search query from the input,
 * and if the query is not empty, redirects the user to the search results page with the entered query.
 *
 * @param {HTMLInputElement} searchInput - The search input element where users type their queries.
 *
 * @example
 * // Assuming you have an input element with the ID 'searchInput' and a button with the ID 'searchButton'
 * const searchInput = document.getElementById('searchInput');
 * searchSubmitClickEventListener(searchInput);
 */
export function searchSubmitClickEventListener(searchInput) {
  // Listen for the search button click to submit the search query
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      window.location.hash = `#/search/${encodeURIComponent(query)}`; // Redirect to the search results page
    }
  });
}
