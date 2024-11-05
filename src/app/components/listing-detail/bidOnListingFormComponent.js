import { submitBidOnListingForm } from '../../events/auction/submitForm.js';
import { getHighestBid } from '../../helpers/bidOnListing.js';
import { displayCredits } from '../../helpers/displayCredits.js';

/**
 * Creates a bid on listing form component for users to place bids on a specific listing.
 *
 * This function generates a form element containing input fields for the bid amount,
 * displays the user's available credits, and shows the current highest bid. It also
 * attaches the necessary event listeners to handle form submission.
 *
 * @param {Object} user - The user object containing user information.
 * @param {number} user.credits - The number of credits the user has.
 * @param {Object} listing - The listing object on which the user can place a bid.
 * @param {number|string} listing.id - The unique identifier of the listing.
 * @param {Object[]} listing.bids - An array of bid objects associated with the listing.
 * @param {HTMLElement} modal - The modal element in which the form is displayed.
 *
 * @returns {HTMLFormElement} - The form element ready to be appended to the modal.
 *
 * @example
 * // Assuming you have a user object, a listing object, and a modal element
 * const user = { credits: 100 };
 * const listing = { id: 123, bids: [{ amount: 50, userId: 1 }] };
 * const modal = document.createElement('div');
 *
 * // Create the bid on listing form component
 * const bidForm = bidOnListingFormComponent(user, listing, modal);
 *
 * // Append the form to the modal
 * modal.querySelector('.modal-content').appendChild(bidForm);
 */
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

  // Add event listeners
  submitBidOnListingForm(user, form, listing, modal);

  return form;
}
