import { bidOnListing } from '../../api/auction/bidOnListing.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';
import { getListingById } from '../../api/auction/getListingById.js';
import { buildNav } from '../../components/nav/nav.js';
import {
  getHighestBid,
  updateBidsSection,
} from '../../helpers/bidOnListing.js';
import { disableButton, enableButton } from '../../helpers/buttonState.js';

/**
 * Handles the submission of the bid on listing form.
 *
 * This function attaches a submit event listener to the provided form. Upon submission, it performs the following actions:
 * 1. Prevents the default form submission behavior.
 * 2. Retrieves and validates the bid amount entered by the user.
 * 3. Ensures that the bid amount does not exceed the user's available credits.
 * 4. Checks that the bid amount is higher than the current highest bid on the listing.
 * 5. Disables the bid button and updates its text to indicate that the bid is being placed.
 * 6. Sends the bid to the server via the `bidOnListing` API function.
 * 7. Refreshes the user's data to reflect updated credits.
 * 8. Retrieves the updated listing details to update the bids section.
 * 9. Re-enables the bid button, closes the modal, updates the bids section, refreshes the navigation bar, and alerts the user of the successful bid.
 * 10. Handles any errors that occur during the bidding process by re-enabling the button and alerting the user.
 *
 * @async
 * @function submitBidOnListingForm
 * @param {Object} user - The user object containing user information.
 * @param {number} user.credits - The number of credits the user currently has.
 * @param {HTMLFormElement} form - The form element where the user submits their bid.
 * @param {Object} listing - The listing object on which the user is placing a bid.
 * @param {number|string} listing.id - The unique identifier of the listing.
 * @param {Object[]} listing.bids - An array of bid objects associated with the listing.
 * @param {HTMLElement} modal - The modal element containing the bid form.
 *
 * @example
 * // Assuming you have the necessary objects and elements
 * const user = { credits: 150 };
 * const form = document.getElementById('bidForm');
 * const listing = { id: 123, bids: [{ bidder: { name: 'Alice' }, amount: 100 }, { bidder: { name: 'Bob' }, amount: 150 }] };
 * const modal = document.getElementById('bidModal');
 *
 * // Initialize the bid submission listener
 * submitBidOnListingForm(user, form, listing, modal);
 */
export function submitBidOnListingForm(user, form, listing, modal) {
  const placeBidBtn = form.querySelector('#placeBidBtn'); // Get the place bid button

  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted

    const bidAmount = parseFloat(form.bidAmount.value); // Get the bid amount

    // Validate the bid amount
    if (isNaN(bidAmount) || bidAmount <= 0) {
      alert('Please enter a valid bid amount.');
      return;
    }

    if (bidAmount > user.credits) {
      alert('You cannot bid more than your available credits.');
      return;
    }

    // Ensure bid is higher than current highest bid
    const highestBid = getHighestBid(listing.bids);
    // Compare the bid amount with the highest bid and show an alert if the bid is not higher
    if (bidAmount <= highestBid) {
      alert(
        `Your bid must be higher than the current highest bid of ${highestBid} credits.`,
      );
      return;
    }

    disableButton(placeBidBtn, 'Bidding...', 'bg-primary', 'bg-gray-400');

    try {
      await bidOnListing(listing.id, bidAmount); // Call the bidOnListing function

      await refreshUserData(); // Refresh user data to get the updated credits

      const updatedListing = await getListingById(listing.id); // Get the updated listing
      enableButton(placeBidBtn, 'Submit Bid', 'bg-gray-400', 'bg-primary');
      modal.remove(); // Close the modal

      updateBidsSection(updatedListing); // Update the bids section with the new bid

      buildNav(); // Update the navbar to reflect the new credits
      alert('Bid placed successfully!'); // Show a success message
      window.location.reload(); // Reload the page to reflect the new bid
    } catch (error) {
      enableButton(placeBidBtn, 'Submit Bid', 'bg-gray-400', 'bg-primary');
      alert(`Error placing bid: ${error.message}`);
    }
  });
}
