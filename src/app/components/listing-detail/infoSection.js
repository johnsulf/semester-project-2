import { placeBidEventListener } from '../../events/auction/placeBid.js';
import { endString, listingEnded } from '../../helpers/bidOnListing.js';

/**
 * Creates the listing information section, displaying details such as title, description, end time,
 * and a button to place a bid. If the listing has ended, the bid button is disabled and styled accordingly.
 *
 * @param {Object} listing - The listing object containing details about the auction.
 * @param {string} listing.title - The title of the listing.
 * @param {string} listing.description - The description of the listing.
 * @param {Date|string} listing.endsAt - The end date and time of the listing.
 * @param {boolean} listing.hasEnded - Indicates whether the listing has ended.
 * @returns {HTMLDivElement} - The DOM element containing the listing information.
 *
 * @example
 * // Assuming you have a listing object
 * const listing = {
 *   title: 'Vintage Clock',
 *   description: 'A beautiful vintage clock in excellent condition.',
 *   endsAt: '2024-12-31T23:59:59Z',
 *   hasEnded: false,
 * };
 *
 * // Create the info section
 * const infoSection = infoSectionComponent(listing);
 * document.body.appendChild(infoSection);
 */
export function infoSectionComponent(listing) {
  const infoContainer = document.createElement('div'); // Create the info container

  // Build the listing info HTML
  infoContainer.innerHTML = `
    <h1 class="text-2xl lg:text-3xl font-heading text-primary mb-4">${listing.title}</h1>
    <p class="text-neutralDark mb-4">${listing.description}</p>
    <p class="ends-at-text text-sm text-gray-500 mb-4">${endString(listing)}</p>
    <button id="placeBidButton" class="bg-primary text-white px-4 py-2 rounded">Place a Bid</button>
  `;

  // Disables button and changes text if listing has ended
  if (listingEnded(listing)) {
    const placeBidButton = infoContainer.querySelector('#placeBidButton');
    placeBidButton.disabled = true;
    placeBidButton.classList.remove('bg-primary');
    placeBidButton.classList.add('bg-gray-300', 'cursor-not-allowed');

    const endsAtText = infoContainer.querySelector('.ends-at-text');
    endsAtText.classList.remove('text-gray-500');
    endsAtText.classList.add('text-error');
  }

  // Add event listeners to the buttons
  placeBidEventListener(infoContainer, listing);

  return infoContainer;
}
