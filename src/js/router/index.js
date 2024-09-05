import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';

// Main app container
const app = document.getElementById('app');

// Function to handle routing based on URL hash
function router() {
  const hash = window.location.hash;

  // Clear the current content in the app container
  app.innerHTML = '';

  // Load the appropriate view based on the hash
  if (hash === '#/' || hash === '') {
    homeView(app);
  } else if (hash === '#/login') {
    loginView(app);
  } else if (hash === '#/register') {
    registerView(app);
  } else {
    // Fallback for 404
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
}

// Initialize the router when the page loads and when the hash changes
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

export default router;
