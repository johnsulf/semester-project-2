import routes from './routes.js';

/**
 * The main application container where views will be rendered.
 * @type {HTMLElement}
 */
const app = document.getElementById('app');

/**
 * Handles client-side routing based on the URL hash.
 *
 * This function checks the current URL hash, matches it against defined routes,
 * extracts any parameters, and renders the corresponding view.
 *
 * @function router
 *
 * @example
 * // Add event listener to call router when the hash changes
 * window.addEventListener('hashchange', router);
 *
 * // Manually call router on page load
 * window.addEventListener('load', router);
 */

function router() {
  const hash = window.location.hash; // Get the URL hash

  app.innerHTML = ''; // Clear the content of the app container

  // Find a matching route
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

// Call the router function when the hash changes
window.addEventListener('hashchange', router);

/**
 * Exports the router function for initialization.
 *
 * @exports router
 *
 * @example
 * // In the main entry file
 * import router from './router.js';
 * router(); // Initialize the router
 */
export default router;
