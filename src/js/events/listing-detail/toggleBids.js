// Helper function to initialize toggle bids event
export function initToggleBidsEvent(container, additionalBidsCount) {
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
