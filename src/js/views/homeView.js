import { displayListings } from '../events/auction/displayListings.js';

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

  await displayListings();
}
