import { getListings } from '../api/auction/getListings.js';
import { listingComponent } from '../components/listings/listingComponent.js';

export async function homeView(app) {
  app.innerHTML = `
    <h1>Welcome to Trust Auction House</h1>
    <section>
      <h2>Browse listings and start bidding on items</h2>
      <div 
        id="listings-container" 
        class="
          grid 
          grid-cols-1 
          gap-6
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
        ">
        <p>Loading listings...</p>
      </div>
    </section>
  `;

  // Fetch and display listings
  const listingsContainer = document.getElementById('listings-container');

  try {
    // Fetch listings from the API
    const listings = await getListings();

    // Clear any existing content (e.g., "Loading listings...")
    listingsContainer.innerHTML = '';

    // Loop through the listings and create listing cards
    listings.forEach((listing) => {
      const listingCard = listingComponent(listing);
      listingsContainer.appendChild(listingCard);
    });
  } catch (error) {
    listingsContainer.innerHTML = `<p class="text-error">Error loading listings: ${error.message}</p>`;
  }
}
