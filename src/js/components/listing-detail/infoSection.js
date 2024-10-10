import { placeBidEventListener } from '../../events/auction/placeBid.js';
import { deleteListing } from '../../api/auction/deleteListing.js';

export function infoSectionComponent(listing) {
  // Create a container for the listing info
  const infoContainer = document.createElement('div');

  // Build the listing info HTML
  infoContainer.innerHTML = `
    <button id="deleteListingBtn" class="bg-red-500 text-white px-4 py-2 rounded">Delete Listing</button>
    <h1 class="text-2xl lg:text-3xl font-heading text-primary mb-4">${listing.title}</h1>
    <p class="text-neutralDark mb-4">${listing.description}</p>
    <p class="text-sm text-gray-500 mb-4">Ends at: ${new Date(listing.endsAt).toLocaleString()}</p>
    <button id="placeBidButton" class="bg-primary text-white px-4 py-2 rounded">Place a Bid</button>
  `;

  // Initialize event for the "Place a Bid" button
  placeBidEventListener(infoContainer, listing.id);
  const deleteBtn = infoContainer.querySelector('#deleteListingBtn');
  deleteBtn.addEventListener('click', async () => {
    try {
      await deleteListing(listing.id);
      infoContainer.innerHTML =
        '<p class="text-success">Listing deleted successfully!</p>';
    } catch (error) {
      infoContainer.innerHTML = `<p class="text-error">Error deleting listing: ${error.message}</p>`;
    }
  });

  return infoContainer;
}
