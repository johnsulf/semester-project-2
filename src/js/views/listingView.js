import { isLoggedIn } from '../api/auth/authState.js';
import { getListingById } from '../api/auction/getListingById.js';
import { mediaCarouselComponent } from '../components/listing-detail/mediaCarousel.js';
import { infoSectionComponent } from '../components/listing-detail/infoSection.js';
import { bidsSectionComponent } from '../components/listing-detail/bidsSection.js';

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

    // Create the media carousel component
    const mediaCarousel = mediaCarouselComponent(listing);

    // Create the info section component
    const infoSection = infoSectionComponent(listing);

    // Create the bids section component
    const bidsSection = bidsSectionComponent(listing);

    // Assemble the view
    listingDetailElement.innerHTML = `
      <div class="container mx-auto px-4">
        <!-- Grid Container -->
        <div class="flex flex-col lg:flex-row lg:space-x-8">
          <!-- Left Column (Image Gallery) -->
          <div class="lg:w-1/2" id="mediaCarouselContainer"></div>
          <!-- Right Column (Listing Info) -->
          <div class="lg:w-1/2 mt-4 lg:mt-0" id="listingInfoContainer"></div>
        </div>
      </div>
    `;

    // Append components to their respective containers
    listingDetailElement
      .querySelector('#mediaCarouselContainer')
      .appendChild(mediaCarousel);
    const listingInfoContainer = listingDetailElement.querySelector(
      '#listingInfoContainer',
    );
    listingInfoContainer.appendChild(infoSection);
    listingInfoContainer.appendChild(bidsSection);

    // Render the listing detail element
    app.innerHTML = '';
    app.appendChild(listingDetailElement);
  } catch (error) {
    app.innerHTML = `<p class="text-error">Error: ${error.message}</p>`;
  }
}
