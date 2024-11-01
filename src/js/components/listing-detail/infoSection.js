import { placeBidEventListener } from '../../events/auction/placeBid.js';

// Function to create the listing info section
export function infoSectionComponent(listing) {
  const infoContainer = document.createElement('div'); // Create the info container

  // Build the listing info HTML
  infoContainer.innerHTML = `
    <h1 class="text-2xl lg:text-3xl font-heading text-primary mb-4">${listing.title}</h1>
    <p class="text-neutralDark mb-4">${listing.description}</p>
    <p class="text-sm text-gray-500 mb-4">Ends at: ${new Date(listing.endsAt).toLocaleString()}</p>
    <button id="placeBidButton" class="bg-primary text-white px-4 py-2 rounded">Place a Bid</button>
  `;

  // Add event listeners to the buttons
  placeBidEventListener(infoContainer, listing);

  return infoContainer;
}
