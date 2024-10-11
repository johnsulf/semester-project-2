import { getLatestListings } from '../../api/auction/getLatestListings.js';
import { carouselComponent } from '../../components/listings/carouselComponent.js';

export async function initLatestListingsCarousel() {
  const carouselContainer = document.getElementById('latestListingsCarousel');

  try {
    const listings = await getLatestListings(10);
    if (listings.length === 0) {
      carouselContainer.innerHTML = '<p>No listings available.</p>';
      return;
    }

    const carousel = carouselComponent(listings);
    carouselContainer.appendChild(carousel);
  } catch (error) {
    carouselContainer.innerHTML = `<p class="text-error">Error loading latest listings: ${error.message}</p>`;
  }
}
