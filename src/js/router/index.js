// src/js/router.js

import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { profileView } from '../views/profileView.js';
import { listingView } from '../views/listingView.js';
import { listingsView } from '../views/listingsView.js';

// Main app container
const app = document.getElementById('app');

// Function to handle routing based on URL hash
function router() {
  const hash = window.location.hash;

  // Clear the current content in the app container
  app.innerHTML = '';

  // Route patterns
  const routes = [
    { path: '', view: homeView },
    { path: '#/', view: homeView },
    { path: '#', view: homeView },
    { path: '#/login', view: loginView },
    { path: '#/register', view: registerView },
    { path: '#/profile', view: profileView },
    { path: '#/listing/:id', view: listingView },
    { path: '#/search/:query', view: listingsView },
  ];

  // Find matching route
  let match = null;
  for (const route of routes) {
    const routeRegex = new RegExp(
      '^' + route.path.replace(/:[^\s/]+/g, '(.+?)') + '$',
    );
    const result = routeRegex.exec(hash);
    if (result) {
      match = { ...route, params: result.slice(1) };
      break;
    }
  }

  if (match) {
    if (match.params && match.params.length > 0) {
      // Decode URI components for parameters
      const decodedParams = match.params.map((param) =>
        decodeURIComponent(param),
      );
      match.view(app, ...decodedParams);
    } else {
      match.view(app);
    }
  } else {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}

// Initialize the router when the page loads and when the hash changes
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

export default router;
