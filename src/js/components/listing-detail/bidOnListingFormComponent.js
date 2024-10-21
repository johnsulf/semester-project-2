import { submitBidOnListingForm } from '../../events/auction/submitForm.js';
import { getHighestBid } from '../../helpers/bidOnListing.js';

export function bidOnListingFormComponent(user, listing, modal) {
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
  // add event listeners TODO
  submitBidOnListingForm(user, form, listing, modal);

  return form;
}
