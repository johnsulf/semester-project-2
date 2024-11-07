import { openBidModal } from '../../events/auction/openBidModal.js';
import { endString, listingEnded } from '../../helpers/bidOnListing.js';

/**
 * Creates a listing card component that displays listing details and a bid button.
 *
 * This function generates a DOM element representing a single listing card, including the
 * listing's image, title, end time, and a button to place a bid. If the listing has ended,
 * the bid button is disabled and styled accordingly. It also attaches the necessary event
 * listeners to handle bid actions.
 *
 * @param {Object} listing - The listing object containing details about the auction.
 * @param {number|string} listing.id - The unique identifier of the listing.
 * @param {string} listing.title - The title of the listing.
 * @param {string} listing.description - The description of the listing.
 * @param {Object[]} listing.media - An array of media objects associated with the listing.
 * @param {Object[]} listing.bids - An array of bid objects associated with the listing.
 * @param {Date|string} listing.endsAt - The end date and time of the listing.
 * @param {Object} listing._count - An object containing count properties related to the user.
 * @param {number} listing._count.listings - The number of listings the user has created.
 * @param {number} listing._count.wins - The number of auction wins the user has.
 *
 * @returns {HTMLDivElement} - The DOM element representing the listing card.
 *
 * @example
 * // Assuming you have a listing object
 * const listing = {
 *   id: 123,
 *   title: 'Vintage Clock',
 *   description: 'A beautiful vintage clock in excellent condition.',
 *   media: [
 *     { url: 'https://example.com/image1.jpg', alt: 'Vintage Clock Image 1' },
 *     { url: 'https://example.com/image2.jpg', alt: 'Vintage Clock Image 2' },
 *   ],
 *   bids: [
 *     { bidder: { name: 'Alice' }, amount: 100, created: '2024-04-01T10:00:00Z' },
 *     { bidder: { name: 'Bob' }, amount: 150, created: '2024-04-02T12:00:00Z' },
 *   ],
 *   endsAt: '2024-04-10T12:00:00Z',
 *   _count: {
 *     listings: 5,
 *     wins: 2,
 *   },
 * };
 *
 * // Create the listing card component
 * const listingCard = listingCardComponent(listing);
 *
 * // Append the listing card to a container
 * document.getElementById('listingsContainer').appendChild(listingCard);
 */
export function listingCardComponent(listing) {
  const listingElement = document.createElement('div'); // Create the listing element
  listingElement.classList.add('p-4', 'rounded-md', 'mx-1', 'bg-white'); // Add classes to the listing element

  // Get the media from the listing data
  const media =
    listing.media && listing.media.length > 0
      ? listing.media
      : [
          {
            url: 'https://via.placeholder.com/300',
            alt: 'Placeholder image',
          },
        ];

  // Check if the listing has ended
  const ended = listingEnded(listing);

  // Set the listing element inner HTML
  listingElement.innerHTML = `
      <a href="#/listing/${listing.id}">
        <div class="w-full h-64 overflow-hidden rounded-lg">
          <img 
            src="${media[0].url}" 
            alt="${media[0].alt}" 
            class="w-full h-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-700">${listing.title}</h3>
        <p class="ends-at-text mt-1 text-sm text-gray-500">${endString(listing)}</p>
      </a>
    `;

  // Create a Place bid button that will be disabled if the listing has ended
  const placeBidButton = document.createElement('button');
  placeBidButton.id = 'placeBidButton';
  placeBidButton.classList.add(
    'text-white',
    'py-2',
    'w-full',
    'rounded',
    'mt-2',
  );

  // If the listing has not ended, add a Place bid button
  if (!ended) {
    placeBidButton.classList.add('bg-primary');
    placeBidButton.textContent = 'Place a Bid';
  } else {
    placeBidButton.classList.add('bg-error', 'cursor-not-allowed');
    placeBidButton.textContent = 'Ended';
    placeBidButton.disabled = true;
  }
  listingElement.appendChild(placeBidButton);
  openBidModal(listingElement, listing);
  return listingElement;
}
