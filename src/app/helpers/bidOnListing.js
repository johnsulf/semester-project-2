/**
 * Retrieves the current highest bid from a list of bids and formats it for display.
 *
 * @param {Array<Object>} bids - An array of bid objects, each containing at least an 'amount' property.
 * @returns {string} - A formatted string displaying the highest bid amount.
 *
 * @example
 * // Assuming listing.bids = [{ amount: 50 }, { amount: 100 }, { amount: 75 }];
 * const highestBid = getHighestBid(listing.bids);
 * // highestBid would be 'Current Highest Bid: 100 Credits' (formatted by displayCredits)
 */
export function getHighestBid(bids) {
  if (bids && bids.length > 0) {
    const sortedBids = bids.sort((a, b) => b.amount - a.amount); // Sort the bids in descending order
    return sortedBids[0].amount; // Return the highest bid amount
  }
  return 0; // Return zero if there are no bids
}

/**
 * Updates the bids section of the page with the latest bid information from the updated listing.
 *
 * @param {Object} updatedListing - The listing object containing the latest bids and listing information.
 *
 * @example
 * // After placing a new bid and receiving the updated listing data:
 * updateBidsSection(updatedListing);
 */
export function updateBidsSection(updatedListing) {
  const bidsSectionContainer = document.getElementById('bidsSectionContainer');
  if (bidsSectionContainer) {
    bidsSectionContainer.innerHTML = ''; // Clear the existing bids section

    const newBidsSection = bidsSectionComponent(updatedListing); // Create the bids section component
    bidsSectionContainer.appendChild(newBidsSection); // Add the bids section component to the container
  }
}

/**
 * Determines whether a listing has ended based on its end date.
 *
 * @param {Object} listing - The listing object containing an 'endsAt' property.
 * @returns {boolean} - Returns true if the listing has ended; otherwise, false.
 *
 * @example
 * if (listingEnded(listing)) {
 *   // Listing has ended
 * } else {
 *   // Listing is still active
 * }
 */
export function listingEnded(listing) {
  return new Date(listing.endsAt) < new Date();
}

/**
 * Generates a formatted string indicating when the auction ends or ended.
 *
 * @param {Object} listing - The listing object containing an 'endsAt' property.
 * @returns {string} - A string indicating the auction end time, formatted appropriately.
 *
 * @example
 * const endMessage = endString(listing);
 * // "Auction ends at: 12/31/2023, 5:00:00 PM" or "Auction ended on: 12/31/2023, 5:00:00 PM"
 */
export function endString(listing) {
  const dateString = new Date(listing.endsAt).toLocaleString();
  return listingEnded(listing)
    ? `Auction ended on: ${dateString}`
    : `Auction ends at: ${dateString}`;
}

/**
 * Validates the bid input by ensuring the bid amount does not exceed available credits
 * and is higher than the current highest bid.
 *
 * @param {number} bidAmount - The amount the user is attempting to bid.
 * @param {number} credits - The user's available credits.
 * @param {Array<number>} bids - An array of existing bids.
 * @returns {boolean} Returns true if the bid is valid, otherwise false.
 *
 * @example
 * // Valid bid scenario
 * const isValid = validateBidInput(150, 200, [100, 120, 140]);
 * // isValid would be true since 150 <= 200 and 150 > 140
 *
 * @example
 * // Bid amount exceeds credits
 * const isValid = validateBidInput(250, 200, [100, 120, 140]);
 * // Alerts "You cannot bid more than your available credits." and isValid would be false
 *
 * @example
 * // Bid is not higher than the highest existing bid
 * const isValid = validateBidInput(130, 200, [100, 120, 140]);
 * // Alerts "Your bid must be higher than the current highest bid of 140 credits." and isValid would be false
 */
export const validateBidInput = (bidAmount, credits, bids) => {
  if (bidAmount > credits) {
    alert('You cannot bid more than your available credits.');
    return false;
  }

  // Ensure bid is higher than current highest bid
  const highestBid = getHighestBid(bids);
  // Compare the bid amount with the highest bid and show an alert if the bid is not higher
  if (bidAmount <= highestBid) {
    alert(
      `Your bid must be higher than the current highest bid of ${highestBid} credits.`,
    );
    return false;
  }
  return true;
};
