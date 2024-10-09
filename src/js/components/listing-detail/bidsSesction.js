export function bidsSectionComponent(listing) {
  const bidsContainer = document.createElement('div');

  if (listing.bids && listing.bids.length > 0) {
    // Sort bids in descending order
    const sortedBids = sortBidsDescending(listing.bids);

    // Get the latest bid
    const latestBid = sortedBids[0];

    // Get the rest of the bids
    const otherBids = sortedBids.slice(1);

    // Number of additional bids
    const additionalBidsCount = otherBids.length;

    // Build the bids HTML
    bidsContainer.innerHTML = `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Latest Bid</h2>
        <div class="mb-4 p-4 border rounded bg-gray-100">
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
    bidsContainer.innerHTML =
      '<p class="mt-8">No bids yet. Be the first to bid!</p>';
  }

  return bidsContainer;
}

// Helper function to sort bids
function sortBidsDescending(bids) {
  return bids.sort((a, b) => b.amount - a.amount);
}

// Helper function to initialize toggle bids event
function initToggleBidsEvent(container, additionalBidsCount) {
  const toggleBidsButton = container.querySelector('#toggleBidsButton');
  if (toggleBidsButton) {
    toggleBidsButton.addEventListener('click', () => {
      const allBidsList = container.querySelector('#allBidsList');
      if (allBidsList.classList.contains('hidden')) {
        allBidsList.classList.remove('hidden');
        toggleBidsButton.textContent = 'Hide all bids';
      } else {
        allBidsList.classList.add('hidden');
        toggleBidsButton.textContent = `View all bids (${additionalBidsCount} more)`;
      }
    });
  }
}
