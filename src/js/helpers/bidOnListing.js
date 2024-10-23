// function to get the current leading bid on a listing
export function getHighestBid(bids) {
  if (bids && bids.length > 0) {
    const sortedBids = bids.sort((a, b) => b.amount - a.amount); // Sort the bids in descending order
    return sortedBids[0].amount; // Return the highest bid amount
  }
  return 0; // Return 0 if there are no bids
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
