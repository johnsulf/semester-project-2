import { getListings as fetchListings } from '../../api/auction/getListings.js';
import { listingComponent } from '../../components/listings/listingComponent.js';

export async function getListings() {
  try {
    const listings = await fetchListings();
    const listingsContainer = document.getElementById('listings-container');
    listingsContainer.innerHTML = ''; // Clear the loading message

    if (listings.length > 0) {
      listings.forEach((listing) => {
        const listingElement = listingComponent(listing);
        listingsContainer.appendChild(listingElement);
      });
    } else {
      listingsContainer.innerHTML =
        '<p>No listings available at the moment.</p>';
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    document.getElementById('listings-container').innerHTML =
      '<p>Error loading listings. Please try again later.</p>';
  }
}
