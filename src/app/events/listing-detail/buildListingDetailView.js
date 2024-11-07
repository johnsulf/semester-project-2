import { getListingById } from '../../api/auction/getListingById.js';
import { imgSectionComponent } from '../../components/listing-detail/imgSectionComponent.js';
import { infoSectionComponent } from '../../components/listing-detail/infoSection.js';
import { bidsSectionComponent } from '../../components/listing-detail/bidsSection.js';
import { bouncer } from '../../components/common/loaders/bouncer.js';

/**
 * Initializes the listing detail view by fetching listing details, creating and assembling
 * the necessary components, and rendering them within the application container.
 *
 * This function performs the following steps:
 * 1. Displays a loading indicator while fetching listing details.
 * 2. Fetches the listing details using the provided `listingId`.
 * 3. Creates the media carousel, info section, and bids section components based on the fetched listing.
 * 4. Assembles the view by injecting the components into the appropriate containers.
 * 5. Renders the assembled listing detail view within the `app` container.
 * 6. Handles any errors that occur during the fetching or rendering process by displaying an error message.
 *
 * @async
 * @function buildListingDetailView
 * @param {HTMLElement} app - The main application container where the listing details will be rendered.
 * @param {string|number} listingId - The unique identifier of the listing to display.
 *
 * @example
 * // Assuming you have an element with the ID 'app' and a listing ID
 * const appContainer = document.getElementById('app');
 * const listingId = 123;
 *
 * // Initialize the listing detail view
 * buildListingDetailView(appContainer, listingId);
 */
export async function buildListingDetailView(app, listingId) {
  // Show a loading indicator
  app.innerHTML = bouncer();

  try {
    // Fetch listing details
    const listing = await getListingById(listingId);

    // Create the listing detail element
    const listingDetailElement = document.createElement('div');
    listingDetailElement.classList.add('p-4');

    // Create the media carousel component
    const mediaCarousel = imgSectionComponent(listing);

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
