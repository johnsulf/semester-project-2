import { bidOnListing } from '../../api/auction/bidOnListing.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';
import { getListingById } from '../../api/auction/getListingById.js';
import { buildNav } from '../../components/nav/nav.js';
import {
  getHighestBid,
  updateBidsSection,
} from '../../helpers/bidOnListing.js';

// Function to submit the bid on listing form
export function submitBidOnListingForm(user, form, listing, modal) {
  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted

    const bidAmount = parseFloat(form.bidAmount.value); // Get the bid amount

    // Validate the bid amount
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

    try {
      await bidOnListing(listing.id, bidAmount); // Call the bidOnListing function

      await refreshUserData(); // Refresh user data to get the updated credits

      const updatedListing = await getListingById(listing.id); // Get the updated listing

      modal.remove(); // Close the modal

      updateBidsSection(updatedListing); // Update the bids section with the new bid

      buildNav(); // Update the navbar to reflect the new credits

      window.location.reload(); // Reload the page to reflect the new bid
    } catch (error) {
      alert(`Error placing bid: ${error.message}`);
    }
  });
}
