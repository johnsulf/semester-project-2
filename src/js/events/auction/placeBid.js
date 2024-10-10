import { bidOnListing } from '../../api/auction/bidOnListing.js';

export function placeBidEventListener(container, listingId) {
  const placeBidButton = container.querySelector('#placeBidButton');
  if (placeBidButton) {
    placeBidButton.addEventListener('click', () => {
      bidOnListing(listingId, 12);
      console.log(`Place a bid on listing ID: ${listingId}`);
    });
  }
}
