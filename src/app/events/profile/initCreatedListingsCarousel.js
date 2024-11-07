import { profile } from '../../helpers/authState.js';
import { imgCarouselComponent } from '../../components/common/imgCarouselComponent.js';
import { listingEnded } from '../../helpers/bidOnListing.js';

/**
 * Initializes the created listings carousel by fetching the user's created listings,
 * sorting them by end date, and rendering them within the carousel component.
 *
 * This function performs the following steps:
 * 1. Selects the carousel container from the DOM.
 * 2. Retrieves the user's profile to access their created listings.
 * 3. Sorts the listings based on their end dates.
 * 4. Creates the carousel component with the sorted listings.
 * 5. Appends the carousel to the carousel container in the DOM.
 *
 * @function initCreatedListingsCarousel
 *
 * @example
 * // Initialize the created listings carousel after rendering the profile view
 * initCreatedListingsCarousel();
 */
export function initCreatedListingsCarousel() {
  // Get the created listings carousel container
  const carouselContainer = document.getElementById('createdListingsCarousel');

  const user = profile(); // Get the user profile from local storage

  const listings = user.listings; // Get the user's created listings

  listings.sort((a, b) => listingEnded(a) - listingEnded(b)); // Sort the listings by end date

  const carousel = imgCarouselComponent(listings); // Create the carousel component

  carouselContainer.appendChild(carousel); // Append the carousel to the container
}
