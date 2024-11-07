import { bouncer } from '../components/common/loaders/bouncer.js';
import { populateListings } from '../events/listings/populateListings.js';

/**
 * Renders the listings view based on the search query.
 *
 * This function sets up the listings view by displaying a header, showing a loading indicator,
 * fetching search results, sorting them, and displaying each listing in a card format.
 * If the search query is a single dot ('.'), it displays all listings.
 *
 * @async
 * @function listingsView
 * @param {HTMLElement} app - The main application container where the listings will be rendered.
 * @param {string} query - The search query used to fetch and display listings.
 *
 * @example
 * // Assuming you have an element with the ID 'app' and a search query
 * const appContainer = document.getElementById('app');
 * const searchQuery = 'vintage clock';
 *
 * // Render the listings view based on the search query
 * listingsView(appContainer, searchQuery);
 */
export async function listingsView(app, query) {
  let h1Content = `Results for "<span class="italic">${query}</span> "`;
  if (query == '.') {
    h1Content = 'Listings';
  }

  // Set the inner HTML of the app container
  app.innerHTML = `
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-semibold mb-4">${h1Content}</h1>
        ${bouncer()}
        <div id="searchResultsContainer" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>
  `;
  const bouncerContainer = document.querySelector('.bouncer-container');
  const searchResultsContainer = document.getElementById(
    'searchResultsContainer',
  );

  populateListings(searchResultsContainer, bouncerContainer, query);
}
