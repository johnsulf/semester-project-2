import { isLoggedIn } from '../events/auth/authState.js';
import { getListingById } from '../api/listings.js';

export async function listingView(app, listingId) {
  // Check if the user is logged in
  if (!isLoggedIn()) {
    window.location.hash = '#/login';
    return;
  }

  // Show a loading indicator
  app.innerHTML = '<p>Loading listing details...</p>';

  try {
    // Fetch listing details
    const listing = await getListingById(listingId);

    // Create the listing detail element
    const listingDetailElement = document.createElement('div');
    listingDetailElement.classList.add('p-4');

    // Build the HTML content
    const mediaUrl =
      listing.media && listing.media.length > 0
        ? listing.media[0].url
        : 'https://via.placeholder.com/600';
    const mediaAlt =
      listing.media && listing.media.length > 0
        ? listing.media[0].alt
        : 'Listing image';

    listingDetailElement.innerHTML = `
      <h1 class="text-3xl font-heading text-primary mb-4">${listing.title}</h1>
      <img src="${mediaUrl}" alt="${mediaAlt}" class="w-full h-auto mb-4 rounded">
      <p class="text-neutralDark mb-4">${listing.description}</p>
      <p class="text-sm text-gray-500 mb-4">Ends at: ${new Date(
        listing.endsAt,
      ).toLocaleString()}</p>
      <button id="placeBidButton" class="bg-primary text-white px-4 py-2 rounded">Place a Bid</button>
    `;

    // Append the listing detail element to the app container
    app.innerHTML = '';
    app.appendChild(listingDetailElement);

    // Add event listener for the "Place a Bid" button
    document.getElementById('placeBidButton').addEventListener('click', () => {
      // TODO: Open the bid modal
      //openBidModal(listingId);
    });
  } catch (error) {
    app.innerHTML = `<p class="text-error">Error: ${error.message}</p>`;
  }
}
