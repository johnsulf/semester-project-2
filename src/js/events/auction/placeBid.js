import { bidOnListing } from '../../api/auction/bidOnListing.js';
import { modalComponent } from '../../components/common/modalComponent.js';
import { profile } from '../../api/auth/authState.js';
import { refreshUserData } from '../../helpers/refreshUserData.js';
import { getListingById } from '../../api/auction/getListingById.js';
import { updateNav } from '../../helpers/updateNav.js';

export function placeBidEventListener(container, listing) {
  const placeBidButton = container.querySelector('#placeBidButton');
  if (placeBidButton) {
    placeBidButton.addEventListener('click', () => {
      // Open the modal with the bid form
      openBidModal(listing);
    });
  }
}

function openBidModal(listing) {
  const modal = modalComponent();

  // Get user data
  const user = profile();

  // Create the bid form
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  form.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Place a Bid</h2>
    <p>Your Credits: <strong>${user.credits}</strong></p>
    <p>Current Highest Bid: <strong>${getHighestBid(listing.bids)}</strong></p>
    <div>
      <label for="bidAmount" class="block text-sm font-medium text-gray-700">Bid Amount</label>
      <input type="number" name="bidAmount" id="bidAmount" min="1" class="mt-1 p-2 border rounded w-full" required>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Submit Bid</button>
    </div>
  `;

  // Handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
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

  // Add the form to the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.appendChild(form);

  // Append the modal to the body
  document.body.appendChild(modal);
}

function getHighestBid(bids) {
  if (bids && bids.length > 0) {
    const sortedBids = bids.sort((a, b) => b.amount - a.amount);
    return sortedBids[0].amount;
  }
  return 0;
}

function updateBidsSection(updatedListing) {
  const bidsSectionContainer = document.getElementById('bidsSectionContainer');
  if (bidsSectionContainer) {
    // Clear the existing bids section
    bidsSectionContainer.innerHTML = '';

    // Recreate the bids section component with the updated listing
    const newBidsSection = bidsSectionComponent(updatedListing);
    bidsSectionContainer.appendChild(newBidsSection);
  }
}
