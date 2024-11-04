import { isLoggedIn } from '../api/auth/authState.js';
import { initListingDetailView } from '../events/listing-detail/initListingDetailView.js';

export async function listingView(app, listingId) {
  // Check if the user is logged in
  if (!isLoggedIn()) {
    alert('You must be logged in to view listings.');
    window.location.hash = '#/login';
    return;
  }
  initListingDetailView(app, listingId);
}
