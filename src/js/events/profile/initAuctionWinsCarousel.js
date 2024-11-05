import { profile } from '../../api/auth/authState.js';
import { carouselComponent } from '../../components/listings/carouselComponent.js';
import { listingEnded } from '../../helpers/bidOnListing.js';

export function initAuctionWinsCarousel() {
  // Get the created listings carousel container
  const carouselContainer = document.getElementById('auctionWinsCarousel');

  const user = profile(); // Get the user profile from local storage

  const wins = user.wins; // Get the user's created listings

  wins.sort((a, b) => listingEnded(a) - listingEnded(b)); // Sort the listings by end date

  const carousel = carouselComponent(wins); // Create the carousel component

  carouselContainer.appendChild(carousel); // Append the carousel to the container
}
