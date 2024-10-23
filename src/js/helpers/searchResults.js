import { searchResultItem } from '../components/listings/searchResultItem.js';

// Function to show the search results container
export function showSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.classList.remove('hidden');
}

// Function to hide the search results container
export function hideSearchResultsContainer() {
  const searchResultsContainer = document.getElementById('searchResults');
  if (searchResultsContainer) {
    searchResultsContainer.classList.add('hidden');
  }
}

// Function to hide the search results container when the user clicks outside of it
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

// Function to display the search results
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
