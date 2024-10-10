import { getListings } from '../api/auction/getListings.js';
import { listingComponent } from '../components/listings/listingComponent.js';
import { createListingEventListener } from '../events/listings/createListing.js';

export async function homeView(app) {
  app.innerHTML = `
    <h1>Welcome to Trust Auction House</h1>
    <section>
      <h2>Browse active listings and start bidding on items</h2>
      <button id="createListingBtn" class="bg-primary text-white px-4 py-2 my-4 rounded">Create a listing</button>
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
    let listings = await getListings();

    // Clear any existing content (e.g., "Loading listings...")
    listingsContainer.innerHTML = '';

    // Loop through the listings and create listing cards
    listings.forEach((listing) => {
      const listingCard = listingComponent(listing);
      listingsContainer.appendChild(listingCard);
    });

    // Initialize the create listing event listener
    createListingEventListener(app);
  } catch (error) {
    listingsContainer.innerHTML = `<p class="text-error">Error loading listings: ${error.message}</p>`;
  }
}
