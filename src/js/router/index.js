import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { profileView } from '../views/profileView.js';

// Main app container
const app = document.getElementById('app');

// Function to handle routing based on URL hash
function router() {
  const hash = window.location.hash;

  // Clear the current content in the app container
  app.innerHTML = '';

  // Load the appropriate view based on the hash
  switch (hash) {
    case '':
    case '#/':
    case '#':
      homeView(app);
      break;
    case '#/login':
      loginView(app);
      break;
    case '#/register':
      registerView(app);
      break;
    case '#/profile':
      profileView(app);
      break;
    default:
      app.innerHTML = '<h1>404 - Page Not Found</h1>'; // Handle unknown routes
      break;
  }
}

// Initialize the router when the page loads and when the hash changes
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

export default router;
