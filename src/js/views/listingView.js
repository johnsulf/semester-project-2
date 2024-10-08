import { isLoggedIn } from '../api/auth/authState.js';
import { getListingById } from '../api/auction/getListingById.js';

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
    // Build the media HTML
    let mediaHtml = '';
    if (listing.media && listing.media.length > 0) {
      mediaHtml = `
      <img src="${listing.media[0].url}" alt="${listing.media[0].alt}" class="w-full h-auto rounded">
    `;
    } else {
      mediaHtml = `
      <img src="https://via.placeholder.com/600" alt="Listing image" class="w-full h-auto rounded">
    `;
    }

    // Build the bids section
    let bidsHtml = '';
    if (listing.bids && listing.bids.length > 0) {
      bidsHtml = '<h2 class="text-2xl font-semibold mt-8 mb-4">Bids</h2>';
      bidsHtml += '<ul>';
      // Sort bids in descending order
      const sortedBids = listing.bids.sort((a, b) => b.amount - a.amount);
      sortedBids.forEach((bid) => {
        bidsHtml += `
        <li class="mb-2">
          <strong>${bid.bidder.name}</strong> bid <span class="text-primary">${bid.amount} credits</span> on ${new Date(bid.created).toLocaleString()}
        </li>
      `;
      });
      bidsHtml += '</ul>';
    } else {
      bidsHtml = '<p class="mt-8">No bids yet. Be the first to bid!</p>';
    }

    // Update the listing detail element's inner HTML with new structure
    listingDetailElement.innerHTML = `
    <div class="container mx-auto px-4">
      <!-- Grid Container -->
      <div class="flex flex-col lg:flex-row lg:space-x-8">
        <!-- Left Column (Image Gallery) -->
        <div class="lg:w-1/2">
          ${mediaHtml}
        </div>
        <!-- Right Column (Listing Info) -->
        <div class="lg:w-1/2 mt-4 lg:mt-0">
          <h1 class="text-3xl font-heading text-primary mb-4">${listing.title}</h1>
          <p class="text-neutralDark mb-4">${listing.description}</p>
          <p class="text-sm text-gray-500 mb-4">Ends at: ${new Date(listing.endsAt).toLocaleString()}</p>
          <button id="placeBidButton" class="bg-primary text-white px-4 py-2 rounded">Place a Bid</button>
          ${bidsHtml}
        </div>
      </div>
    </div>
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
