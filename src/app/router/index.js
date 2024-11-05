import routes from './routes.js';

// Main app container
const app = document.getElementById('app');

// Function to handle routing based on URL hash
function router() {
  const hash = window.location.hash; // Get the URL hash

  app.innerHTML = ''; // Clear the content of the app container

  // Find matching route
  let match = null;
  for (const route of routes) {
    const routeRegex = new RegExp(
      '^' + route.path.replace(/:[^\s/]+/g, '(.+?)') + '$', // Convert the route path to a regex since the path may contain parameters
    );
    const result = routeRegex.exec(hash); // Check if the hash matches the route path
    if (result) {
      match = { ...route, params: result.slice(1) }; // Store the matched route and parameters
      break;
    }
  }

  // If a matching route is found, call the view function
  if (match) {
    if (match.params && match.params.length > 0) {
      // Decode the parameters to handle special characters
      const decodedParams = match.params.map((param) =>
        decodeURIComponent(param),
      );
      match.view(app, ...decodedParams); // Call the view function with the app container and parameters
    } else {
      match.view(app); // Call the view function with the app container
    }
  } else {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}

// Call the router function when the page loads
window.addEventListener('hashchange', router);

export default router;
