import { getLatestListings } from '../../api/auction/getLatestListings.js';
import { imgCarouselComponent } from '../../components/common/imgCarouselComponent.js';
import { displayLatestListingsLoader } from '../../helpers/displayLoaders.js';

/**
 * Initializes the latest listings carousel by displaying skeleton loaders, fetching the latest listings,
 * and rendering them within the carousel component. Handles loading states and error messages.
 *
 * This function performs the following steps:
 * 1. Selects the carousel container element from the DOM.
 * 2. Displays skeleton loaders to indicate that listings are being fetched.
 * 3. Fetches the latest 10 listings using the `getLatestListings` API function.
 * 4. Clears the skeleton loaders from the carousel container.
 * 5. If listings are available, creates and appends the carousel component with the fetched listings.
 * 6. If no listings are found, displays a "No listings available" message.
 * 7. Handles any errors that occur during the fetch process by displaying an error message.
 *
 * @async
 * @function initLatestListingsCarousel
 *
 * @example
 * // Initialize the latest listings carousel when the home view is rendered
 * initLatestListingsCarousel();
 */
export async function initLatestListingsCarousel() {
  const carouselContainer = document.getElementById('latestListingsCarousel');

  displayLatestListingsLoader(carouselContainer); // Display Skeleton Loaders

  try {
    // Fetch the Listings
    const listings = await getLatestListings(10); // Get the latest 10 listings

    // Remove Skeleton Loaders
    carouselContainer.innerHTML = '';

    // Display a message if there are no listings
    if (listings.length === 0) {
      carouselContainer.innerHTML = '<p>No listings available.</p>';
      return;
    }

    // Create and Append the Carousel Component
    const carousel = imgCarouselComponent(listings);
    carouselContainer.appendChild(carousel);
  } catch (error) {
    // Handle Errors and Remove Loaders
    carouselContainer.innerHTML = `<p class="text-error">Error loading latest listings: ${error.message}</p>`;
  }
}
