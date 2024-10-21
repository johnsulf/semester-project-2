export function getHighestBid(bids) {
  if (bids && bids.length > 0) {
    const sortedBids = bids.sort((a, b) => b.amount - a.amount);
    return sortedBids[0].amount;
  }
  return 0;
}

export function updateBidsSection(updatedListing) {
  const bidsSectionContainer = document.getElementById('bidsSectionContainer');
  if (bidsSectionContainer) {
    // Clear the existing bids section
    bidsSectionContainer.innerHTML = '';

    // Recreate the bids section component with the updated listing
    const newBidsSection = bidsSectionComponent(updatedListing);
    bidsSectionContainer.appendChild(newBidsSection);
  }
}
