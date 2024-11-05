import { displayCredits } from './displayCredits.js';

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
    return displayCredits('Current Highest Bid: ', sortedBids[0].amount); // Return the highest bid amount
  }
  return displayCredits('Current Highest Bid: ', 0); // Return zero if there are no bids
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
