import { getLatestListings } from '../../api/auction/getLatestListings.js';
import { carouselComponent } from '../../components/listings/carouselComponent.js';

// Function to initialize the latest listings carousel
export async function initLatestListingsCarousel() {
  const carouselContainer = document.getElementById('latestListingsCarousel');

  try {
    const listings = await getLatestListings(10); // Get the latest 10 listings

    // Display a message if there are no listings
    if (listings.length === 0) {
      carouselContainer.innerHTML = '<p>No listings available.</p>';
      return;
    }

    // Create the carousel component and append it to the container
    const carousel = carouselComponent(listings);
    carouselContainer.appendChild(carousel);
  } catch (error) {
    carouselContainer.innerHTML = `<p class="text-error">Error loading latest listings: ${error.message}</p>`;
  }
}
