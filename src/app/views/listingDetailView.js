import { isLoggedIn } from '../helpers/authState.js';
import { buildListingDetailView } from '../events/listing-detail/buildListingDetailView.js';

/**
 * Renders the detailed view of a listing if the user is authenticated.
 *
 * This function checks if the user is logged in. If not, it alerts the user and redirects to the login page.
 * If the user is logged in, it initializes the listing detail view with the provided listing ID.
 *
 * @async
 * @function listingDetailView
 * @param {HTMLElement} app - The main application container where the listing details will be rendered.
 * @param {string|number} listingId - The unique identifier of the listing to display.
 *
 * @example
 * // Assuming you have an element with the ID 'app' and a listing ID
 * const appContainer = document.getElementById('app');
 * const listingId = 123;
 *
 * // Render the listing view
 * listingDetailView(appContainer, listingId);
 */
export async function listingDetailView(app, listingId) {
  // Check if the user is logged in
  if (!isLoggedIn()) {
    alert('You must be logged in to view listing details.');
    window.location.hash = '#/login';
    return;
  }
  buildListingDetailView(app, listingId);
}
