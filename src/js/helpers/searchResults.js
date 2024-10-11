import { searchResultItem } from '../components/listings/searchResultItem.js';

export function showSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.remove('hidden');
}

export function hideSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.add('hidden');
}

export function hideSearchResultsContainerOnClick(searchResultsContainer) {
  document.addEventListener('click', (event) => {
    if (
      !searchResultsContainer.contains(event.target) &&
      event.target !== searchInput
    ) {
      hideSearchResultsContainer();
    }
  });
}

export function displaySearchResults(results, container) {
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<p class="p-4 text-gray-500">No results found.</p>';
    return;
  }

  const resultsList = document.createElement('ul');
  resultsList.classList.add('divide-y', 'divide-gray-200');

  results.forEach((listing) => {
    const resultItem = searchResultItem(listing);
    resultsList.appendChild(resultItem);
  });

  container.appendChild(resultsList);
}
