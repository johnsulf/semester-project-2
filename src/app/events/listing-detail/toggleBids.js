/**
 * Initializes the event listener for toggling the visibility of all bids in the listing detail view.
 *
 * This function selects the "View all bids" button from the provided container and attaches a click event listener to it.
 * When clicked, it toggles the visibility of the bids list and updates the button text accordingly.
 *
 * @param {HTMLElement} container - The DOM element containing the bids section and the toggle button.
 * @param {number} additionalBidsCount - The number of additional bids that can be viewed.
 *
 * @example
 * // Assuming you have a container element and an additional bids count
 * const container = document.getElementById('bidsContainer');
 * const additionalBidsCount = 5;
 *
 * // Initialize the toggle bids event listener
 * initToggleBidsEvent(container, additionalBidsCount);
 */
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
