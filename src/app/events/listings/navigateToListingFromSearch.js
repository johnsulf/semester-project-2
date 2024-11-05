import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

/**
 * Navigates the user to a specific listing when a list item is clicked.
 *
 * This function attaches a click event listener to a given DOM element (`item`). When the element is clicked,
 * it performs the following actions:
 * 1. Hides the search results container to provide a cleaner transition.
 * 2. Updates the browser's hash to navigate to the detailed view of the selected listing.
 *
 * @param {HTMLElement} item - The DOM element (e.g., a list item) that the user interacts with to navigate to the listing.
 * @param {Object} listing - The listing object containing details about the specific auction or item.
 * @param {number|string} listing.id - The unique identifier of the listing used to construct the navigation URL.
 *
 * @example
 * // Assuming you have a list item element and a listing object
 * const listItem = document.getElementById('listingItem1');
 * const listing = { id: 123, title: 'Vintage Clock', price: 50 };
 *
 * // Initialize navigation for the list item
 * navigateToListing(listItem, listing);
 */
export function navigateToListing(item, listing) {
  // Ensure that both `item` and `listing` are provided
  if (!item || !listing || !listing.id) {
    console.error('navigateToListing: Invalid arguments provided.');
    return;
  }

  // Add event listener to the list item
  item.addEventListener('click', () => {
    // Hide the search results container to enhance user experience
    hideSearchResultsContainer();

    // Update the URL hash to navigate to the listing detail view
    window.location.hash = `#/listing/${listing.id}`;
  });
}
