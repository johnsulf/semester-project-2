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

    // Build the media HTML
    let mediaHtml = '';
    if (listing.media && listing.media.length > 0) {
      // Main image display area with navigation arrows
      mediaHtml = `
        <div class="relative mb-4">
          <img id="mainImage" src="${listing.media[0].url}" alt="${listing.media[0].alt}" class="w-full h-auto rounded transition-opacity duration-300">
          <!-- Left Arrow -->
          <button id="prevImage" class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            &#10094;
          </button>
          <!-- Right Arrow -->
          <button id="nextImage" class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            &#10095;
          </button>
        </div>
        <div class="flex space-x-2 overflow-x-auto">
          ${listing.media
            .map(
              (mediaItem, index) => `
                <img
                  src="${mediaItem.url}"
                  alt="${mediaItem.alt}"
                  class="w-16 h-16 md:w-20 md:h-20 object-cover rounded cursor-pointer border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}"
                  data-index="${index}"
                >
              `,
            )
            .join('')}
        </div>
      `;
    } else {
      mediaHtml = `
        <img src="https://via.placeholder.com/600" alt="Listing image" class="w-full h-auto rounded">
      `;
    }

    // Build the bids section
    let bidsHtml = '';
    if (listing.bids && listing.bids.length > 0) {
      // Sort bids in descending order (highest bid first)
      const sortedBids = listing.bids.sort((a, b) => b.amount - a.amount);

      // Get the latest bid
      const latestBid = sortedBids[0];

      // Get the rest of the bids
      const otherBids = sortedBids.slice(1);

      // Number of additional bids
      const additionalBidsCount = otherBids.length;

      // Display the latest bid prominently
      bidsHtml += `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Latest Bid</h2>
        <div class="mb-4 p-4 border rounded bg-gray-100">
          <p><strong>${latestBid.bidder.name}</strong> bid <span class="text-primary">${latestBid.amount} credits</span></p>
          <p class="text-sm text-gray-500">on ${new Date(latestBid.created).toLocaleString()}</p>
        </div>
      `;

      // If there are additional bids, provide an option to view them
      if (additionalBidsCount > 0) {
        bidsHtml += `
          <button id="toggleBidsButton" class="text-primary underline">
            View all bids (${additionalBidsCount} more)
          </button>
          <ul id="allBidsList" class="mt-4 hidden">
            ${otherBids
              .map(
                (bid) => `
                <li class="mb-2">
                  <strong>${bid.bidder.name}</strong> bid <span class="text-primary">${bid.amount} credits</span> on ${new Date(bid.created).toLocaleString()}
                </li>
              `,
              )
              .join('')}
          </ul>
        `;
      }
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
            <h1 class="text-2xl lg:text-3xl font-heading text-primary mb-4">${listing.title}</h1>
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

    // JavaScript to handle the image carousel functionality
    if (listing.media && listing.media.length > 0) {
      let currentIndex = 0;
      const mainImage = document.getElementById('mainImage');
      const thumbnails = listingDetailElement.querySelectorAll('[data-index]');

      const updateMainImage = (index) => {
        // Add fade-out effect
        mainImage.classList.add('opacity-0');

        setTimeout(() => {
          mainImage.src = listing.media[index].url;
          mainImage.alt = listing.media[index].alt;

          // Update thumbnail borders
          thumbnails.forEach((thumb) => {
            thumb.classList.remove('border-primary');
            thumb.classList.add('border-transparent');
          });
          thumbnails[index].classList.remove('border-transparent');
          thumbnails[index].classList.add('border-primary');

          // Remove fade-out effect
          mainImage.classList.remove('opacity-0');
        }, 300);
      };

      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
          currentIndex = parseInt(thumbnail.getAttribute('data-index'), 10);
          updateMainImage(currentIndex);
        });
      });

      // Navigation buttons
      const prevButton = document.getElementById('prevImage');
      const nextButton = document.getElementById('nextImage');

      prevButton.addEventListener('click', () => {
        currentIndex =
          (currentIndex - 1 + listing.media.length) % listing.media.length;
        updateMainImage(currentIndex);
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % listing.media.length;
        updateMainImage(currentIndex);
      });
    }

    // Add event listener for the "Place a Bid" button
    document.getElementById('placeBidButton').addEventListener('click', () => {
      // TODO: openBidModal(listingId);
    });

    // Add event listener for the "Toggle Bids" button if it exists
    const toggleBidsButton = document.getElementById('toggleBidsButton');
    if (toggleBidsButton) {
      toggleBidsButton.addEventListener('click', () => {
        const allBidsList = document.getElementById('allBidsList');
        if (allBidsList.classList.contains('hidden')) {
          allBidsList.classList.remove('hidden');
          toggleBidsButton.textContent = 'Hide all bids';
        } else {
          allBidsList.classList.add('hidden');
          toggleBidsButton.textContent = `View all bids (${additionalBidsCount} more)`;
        }
      });
    }
  } catch (error) {
    app.innerHTML = `<p class="text-error">Error: ${error.message}</p>`;
  }
}
