import { getHighestBid } from './bidOnListing.js';

export function displayCredits(leadingText, credits, listing = null) {
  return `
        <div class="flex items-center space-x-2">
            <p>${leadingText}</p>
            <div class="
                    flex 
                    items-center 
                    gap-1 
                    px-2 py-1 
                    rounded 
                    ${listing ? creditsColor(credits, listing) : ''}">
                <img src="src/assets/credits.png" alt="Credits icon" width="20">
                <p class="font-bold ${listing ? 'text-white' : ''}">
                    ${credits}
                </p>
            </div>
        </div>
    `;
}

function creditsColor(credits, listing) {
  if (credits < getHighestBid(listing.bids)) {
    return 'bg-error';
  }
  return 'bg-success';
}
