import { profile } from '../../helpers/authState.js';
import { imgCarouselComponent } from '../../components/common/imgCarouselComponent.js';
import { listingEnded } from '../../helpers/bidOnListing.js';

/**
 * Initializes the auction wins carousel by fetching the user's auction wins,
 * sorting them by end date, and rendering them within the carousel component.
 *
 * This function performs the following steps:
 * 1. Selects the auction wins carousel container from the DOM.
 * 2. Retrieves the user's profile to access their auction wins.
 * 3. Sorts the auction wins based on their end dates.
 * 4. Creates the carousel component with the sorted auction wins.
 * 5. Appends the carousel to the carousel container in the DOM.
 *
 * @function initAuctionWinsCarousel
 *
 * @example
 * // Initialize the auction wins carousel after rendering the profile view
 * initAuctionWinsCarousel();
 */
export function initAuctionWinsCarousel() {
  // Get the auction wins carousel container
  const carouselContainer = document.getElementById('auctionWinsCarousel');

  const user = profile(); // Get the user profile from local storage

  const wins = user.wins; // Get the user's auction wins

  wins.sort((a, b) => listingEnded(a) - listingEnded(b)); // Sort the wins by end date

  const carousel = imgCarouselComponent(wins); // Create the carousel component

  carouselContainer.appendChild(carousel); // Append the carousel to the container
}
