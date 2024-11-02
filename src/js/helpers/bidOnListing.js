import { displayCredits } from './displayCredits.js';

// function to get the current leading bid on a listing
export function getHighestBid(bids) {
  if (bids && bids.length > 0) {
    const sortedBids = bids.sort((a, b) => b.amount - a.amount); // Sort the bids in descending order
    return displayCredits('Current Highest Bid: ', sortedBids[0].amount); // Return the highest bid amount
  }
  return displayCredits('Current Highest Bid: ', 0); // Return No bids yet if there are no bids
}

// function to update the bids section component
export function updateBidsSection(updatedListing) {
  const bidsSectionContainer = document.getElementById('bidsSectionContainer');
  if (bidsSectionContainer) {
    bidsSectionContainer.innerHTML = ''; // Clear the existing bids section

    const newBidsSection = bidsSectionComponent(updatedListing); // Create the bids section component
    bidsSectionContainer.appendChild(newBidsSection); // Add the bids section component to the container
  }
}

// function to check if a listing has ended
export function listingEnded(listing) {
  return new Date(listing.endsAt) < new Date();
}

export function endString(listing) {
  const dateString = new Date(listing.endsAt).toLocaleString();
  return listingEnded(listing)
    ? `Auction ended on: ${dateString}`
    : `Auction ends at: ${dateString}`;
}
