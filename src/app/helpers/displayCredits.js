import { getHighestBid } from './bidOnListing.js';

/**
 * Generates an HTML string to display the user's credits, optionally styled based on whether the user can afford the highest bid on a listing.
 *
 * If a `listing` is provided, the display will include background color styling to indicate whether the user can afford the highest bid:
 * - Red background (`bg-error`) if the user's credits are less than the highest bid.
 * - Green background (`bg-success`) if the user can afford the highest bid.
 *
 * @param {string} leadingText - The text to display before the credits.
 * @param {number} credits - The amount of credits the user has.
 * @param {Object} [listing=null] - The listing object (optional). If provided, styling will be applied based on the highest bid.
 * @returns {string} - An HTML string representing the credits display.
 *
 * @example
 * // Without listing
 * const creditsHtml = displayCredits('Your Credits: ', 150);
 *
 * // With listing
 * const creditsHtml = displayCredits('Current Highest Bid: ', highestBidAmount, listing);
 */
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

/**
 * Determines the background color class for the credits display based on whether the user can afford the highest bid on a listing.
 *
 * - Returns 'bg-error' (red) if the user's credits are less than the highest bid amount.
 * - Returns 'bg-success' (green) if the user can afford the highest bid.
 *
 * @param {number} credits - The amount of credits the user has.
 * @param {Object} listing - The listing object containing bid information.
 * @returns {string} - The Tailwind CSS class for the background color.
 *
 * @example
 * // Assuming the highest bid on the listing is 120
 * const bgColorClass = creditsColor(100, listing); // Returns 'bg-error'
 * const bgColorClass = creditsColor(150, listing); // Returns 'bg-success'
 */
function creditsColor(credits, listing) {
  const highestBidAmount = getHighestBid(listing.bids);
  if (credits < highestBidAmount) {
    return 'bg-error';
  }
  return 'bg-success';
}
