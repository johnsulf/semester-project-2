import { initToggleBidsEvent } from '../../events/listing-detail/toggleBids.js';
import { listingEnded } from '../../helpers/bidOnListing.js';
import { sortDescending } from '../../helpers/sortingLists.js';
import { displayCredits } from '../../helpers/displayCredits.js';

/**
 * Creates the bids section for a listing, displaying the latest bid and additional bids if available.
 *
 * This function generates an HTML structure that shows the latest bid on the listing, along with a button to toggle
 * the display of all additional bids. If the listing has ended, it highlights the winning bid. It also handles
 * cases where there are no bids yet or the listing has ended without any bids.
 *
 * @param {Object} listing - The listing object containing details about the auction.
 * @param {Object[]} listing.bids - An array of bid objects associated with the listing.
 * @param {string} listing.endsAt - The end date and time of the listing.
 * @param {Object} listing._count - An object containing count properties related to the user.
 * @param {number} listing._count.listings - The number of listings the user has created.
 * @param {number} listing._count.wins - The number of auction wins the user has.
 *
 * @returns {HTMLDivElement} - The DOM element containing the bids section.
 *
 * @example
 * // Assuming you have a listing object with bids
 * const listing = {
 *   bids: [
 *     { bidder: { name: 'Alice' }, amount: 100, created: '2024-04-01T10:00:00Z' },
 *     { bidder: { name: 'Bob' }, amount: 150, created: '2024-04-02T12:00:00Z' },
 *     // more bids...
 *   ],
 *   endsAt: '2024-04-10T12:00:00Z',
 *   _count: {
 *     listings: 5,
 *     wins: 2,
 *   },
 * };
 *
 * // Create the bids section
 * const bidsSection = bidsSectionComponent(listing);
 *
 * // Append the bids section to a container
 * document.getElementById('bidsSectionContainer').appendChild(bidsSection);
 */
export function bidsSectionComponent(listing) {
  const bidsContainer = document.createElement('div'); // Create the bids container

  if (listing.bids && listing.bids.length > 0) {
    // Sort bids in descending order
    const sortedBids = sortDescending(listing.bids, 'amount');

    // Get the latest bid
    const latestBid = sortedBids[0];

    // Get the rest of the bids
    const otherBids = sortedBids.slice(1);

    // Number of additional bids
    const additionalBidsCount = otherBids.length;

    let ended = false;
    if (new Date(listing.endsAt) < new Date()) {
      ended = true;
    }

    // Build the bids HTML
    bidsContainer.innerHTML = `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Latest Bid</h2>
        <div class="mb-4 p-4 border rounded bg-gray-100">
          ${ended ? '<p class="w-fit rounded-md bg-success px-4 py-2 text-white">Winning bid 🤝</p>' : ''}
          ${displayCredits(`${latestBid.bidder.name} bid`, latestBid.amount)}
          <p class="text-sm text-gray-500">on ${new Date(latestBid.created).toLocaleString()}</p>
        </div>
        ${
          additionalBidsCount > 0
            ? `
            <button id="toggleBidsButton" class="text-primary underline">
              View all bids (${additionalBidsCount} more)
            </button>
            <ul id="allBidsList" class="mt-4 hidden">
              ${otherBids
                .map(
                  (bid) => `
                  <li class="mb-2 bg-gray-100 px-4 py-2 rounded border">
                    ${displayCredits(`${bid.bidder.name} bid`, bid.amount)} <span class="text-sm text-gray-500">on ${new Date(
                      bid.created,
                    ).toLocaleString()}</span>
                  </li>
                `,
                )
                .join('')}
            </ul>
          `
            : ''
        }
      `;

    // Initializes event listener for toggle button
    initToggleBidsEvent(bidsContainer, additionalBidsCount);
  } else {
    if (listingEnded(listing)) {
      bidsContainer.innerHTML = '<p class="mt-8">No bids.</p>';
    } else {
      bidsContainer.innerHTML =
        '<p class="mt-8">No bids yet. Be the first to bid!</p>';
    }
  }

  return bidsContainer;
}
