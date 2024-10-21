import { bidOnListing } from '../../api/auction/bidOnListing.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';
import { getListingById } from '../../api/auction/getListingById.js';
import { updateNav } from '../../helpers/updateNav.js';
import {
  getHighestBid,
  updateBidsSection,
} from '../../helpers/bidOnListing.js';

export function submitBidOnListingForm(user, form, listing, modal) {
  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Get user data
    const bidAmount = parseFloat(form.bidAmount.value);

    // Validate bid amount
    if (bidAmount > user.credits) {
      alert('You cannot bid more than your available credits.');
      return;
    }

    // Ensure bid is higher than current highest bid
    const highestBid = getHighestBid(listing.bids);
    if (bidAmount <= highestBid) {
      alert(
        `Your bid must be higher than the current highest bid of ${highestBid} credits.`,
      );
      return;
    }

    try {
      // Place the bid
      await bidOnListing(listing.id, bidAmount);

      // Refresh user data and listing data
      await refreshUserData();
      const updatedListing = await getListingById(listing.id);

      // Close the modal
      modal.remove();

      updateBidsSection(updatedListing);

      // Update the view
      window.location.reload();
      updateNav();
    } catch (error) {
      alert(`Error placing bid: ${error.message}`);
    }
  });
}
