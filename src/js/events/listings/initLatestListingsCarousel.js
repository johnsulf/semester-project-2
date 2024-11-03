import { getLatestListings } from '../../api/auction/getLatestListings.js';
import { carouselComponent } from '../../components/listings/carouselComponent.js';
import { displayLatestListingsLoader } from '../../helpers/displayLoaders.js';

// Function to initialize the latest listings carousel
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
    const carousel = carouselComponent(listings);
    carouselContainer.appendChild(carousel);
  } catch (error) {
    // Handle Errors and Remove Loaders
    carouselContainer.innerHTML = `<p class="text-error">Error loading latest listings: ${error.message}</p>`;
  }
}
