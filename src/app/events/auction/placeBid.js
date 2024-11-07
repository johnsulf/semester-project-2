import { modalComponent } from '../../components/common/modalComponent.js';
import { isLoggedIn, profile } from '../../helpers/authState.js';
import { bidOnListingFormComponent } from '../../components/listing-detail/bidOnListingFormComponent.js';

/**
 * Attaches a click event listener to the "Place Bid" button within a listing.
 *
 * This function performs the following actions:
 * 1. Selects the "Place Bid" button from the provided container.
 * 2. Checks if the user is logged in and retrieves the user's listing IDs.
 * 3. Attaches a click event listener to the "Place Bid" button that:
 *    - Alerts the user and redirects to the login page if not logged in.
 *    - Prevents the user from bidding on their own listings.
 *    - Opens a modal with a bid form if the user is eligible to place a bid.
 *
 * @param {HTMLElement} container - The DOM element containing the "Place Bid" button.
 * @param {Object} listing - The listing object on which the user can place a bid.
 * @param {number|string} listing.id - The unique identifier of the listing.
 *
 * @example
 * // Assuming you have a container element and a listing object
 * const container = document.getElementById('listingInfoContainer');
 * const listing = { id: 123, title: 'Vintage Clock', };
 *
 * // Initialize the place bid event listener
 * placeBidEventListener(container, listing);
 */
export function placeBidEventListener(container, listing) {
  const placeBidButton = container.querySelector('#placeBidButton');
  let listingIds = [];

  // If the user is logged in, get the user's listing ids
  if (isLoggedIn()) {
    const user = profile(); // Get the user profile
    listingIds = user.listings.map((listing) => listing.id); // Get the user's listing ids
  }

  // If the button exists, add the event listener
  if (placeBidButton) {
    placeBidButton.addEventListener('click', () => {
      if (!isLoggedIn()) {
        alert('You must be logged in to place a bid.');
        window.location.hash = '#/login'; // If the user is not logged in, redirect to the login page
        return;
      } else if (listingIds.includes(listing.id)) {
        // Prevent users from bidding on their own listings
        alert('You cannot bid on your own listing.');
        return;
      } else {
        const modal = modalComponent(); // Create a modal
        const user = profile(); // Get the user profile
        const form = bidOnListingFormComponent(user, listing, modal); // Create the form

        // Add the form to the modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.appendChild(form);

        // Append the modal to the body
        document.body.appendChild(modal);
      }
    });
  }
}
