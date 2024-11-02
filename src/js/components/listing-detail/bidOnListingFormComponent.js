import { submitBidOnListingForm } from '../../events/auction/submitForm.js';
import { getHighestBid } from '../../helpers/bidOnListing.js';
import { displayCredits } from '../../helpers/displayCredits.js';

// Function to create the bid on listing form component
export function bidOnListingFormComponent(user, listing, modal) {
  const form = document.createElement('form'); // Create the form element
  form.classList.add('space-y-4'); // Add classes to the form

  // Set the form inner HTML
  form.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Place a Bid</h2>
    <div class="px-4 py-2 rounded bg-gray-100 border">
      ${displayCredits('Your Credits: ', user.credits, listing)}
      ${getHighestBid(listing.bids)}
    </div>
    <div>
      <label for="bidAmount" class="block text-sm font-medium text-gray-700">Bid Amount</label>
      <input type="number" name="bidAmount" placeholder="Bid Amount (higher than current highest bid)" id="bidAmount" min="1" class="mt-1 p-2 border rounded w-full" required>
    </div>
    <div class="flex justify-end">
      <button type="submit" id="placeBidBtn" class="bg-primary text-white px-4 py-2 rounded">Submit Bid</button>
    </div>
  `;

  // add event listeners
  submitBidOnListingForm(user, form, listing, modal);

  return form;
}
