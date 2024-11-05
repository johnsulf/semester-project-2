import { profile } from '../../api/auth/authState.js';
import { carouselComponent } from '../../components/listings/carouselComponent.js';
import { listingEnded } from '../../helpers/bidOnListing.js';

export function initCreatedListingsCarousel() {
  // Get the created listings carousel container
  const carouselContainer = document.getElementById('createdListingsCarousel');

  const user = profile(); // Get the user profile from local storage

  const listings = user.listings; // Get the user's created listings

  listings.sort((a, b) => listingEnded(a) - listingEnded(b)); // Sort the listings by end date

  const carousel = carouselComponent(listings); // Create the carousel component

  carouselContainer.appendChild(carousel); // Append the carousel to the container
}
