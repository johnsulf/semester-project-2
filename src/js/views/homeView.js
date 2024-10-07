import { getListings } from '../events/auction/getListings.js';

export async function homeView(app) {
  app.innerHTML = `
    <section>
      <h1>Welcome to the Auction Site!</h1>
      <h2>How it works:</h2>
      <h3>1. Register</h3>
      <h4>Sign up for an account to start bidding on items.</h4>
      <p>Browse listings and start bidding on items.</p>
      <div 
        id="listings-container" 
        class="
          grid 
          grid-cols-1 
          gap-x-6 
          gap-y-10 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          xl:gap-x-8">
        <p>Loading listings...</p>
      </div>
    </section>
  `;

  await getListings();
}
