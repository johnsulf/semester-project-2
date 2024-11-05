import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

// Function to add an event listener to the search input
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

// Function to add an event listener to the search submit button
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
