import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

export function searchSubmitEnterEventListener(searchInput) {
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query.length > 0) {
        hideSearchResultsContainer();
        window.location.hash = `#/search/${encodeURIComponent(query)}`;
      }
    }
  });
}

export function searchSubmitClickEventListener(searchInput) {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      window.location.hash = `#/search/${encodeURIComponent(query)}`;
    }
  });
}
