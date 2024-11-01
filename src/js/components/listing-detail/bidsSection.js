import { initToggleBidsEvent } from '../../events/listing-detail/toggleBids.js';
import { listingEnded } from '../../helpers/bidOnListing.js';
import { sortDescending } from '../../helpers/sortingLists.js';

// Function to create the bids section
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
          <p class="bg-success text-white w-fit py-2 px-4 rounded-md">${ended ? 'Winning bid 🤝' : ''}</p>
          <p><strong>${latestBid.bidder.name}</strong> bid <span class="text-primary">${latestBid.amount} credits</span></p>
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
                  <li class="mb-2">
                    <strong>${bid.bidder.name}</strong> bid <span class="text-primary">${bid.amount} credits</span> on ${new Date(
                      bid.created,
                    ).toLocaleString()}
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
