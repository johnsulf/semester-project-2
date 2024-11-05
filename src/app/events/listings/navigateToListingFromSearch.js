import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

export function navigateToListing(item, listing) {
  // Add event listener to the list item
  item.addEventListener('click', () => {
    hideSearchResultsContainer();
    window.location.hash = `#/listing/${listing.id}`;
  });
}
