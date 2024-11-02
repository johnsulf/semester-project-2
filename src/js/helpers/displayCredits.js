import { getHighestBid } from './bidOnListing.js';

export function displayCredits(leadingText, credits, listing = null) {
  return `
        <div class="flex items-center">
            <p>${leadingText}</p>
            <div class="
                    flex 
                    items-center 
                    gap-1 
                    px-2 py-1 
                    rounded 
                    ${listing ? creditsColor(credits, listing) : ''}">
                <p class="font-bold ${listing ? 'text-white' : ''}">
                    ${credits}
                </p>
                <img src="src/assets/credits.png" alt="Credits icon" width="20">
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
