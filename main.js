import router from './src/js/router/index.js';
import { updateNav } from './src/js/events/auth/nav.js';
import { getListings } from './src/js/api/auction/getListings.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  router();
  updateNav();
  getListings();
});
