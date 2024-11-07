import router from './src/app/router/router.js';
import { buildNav } from './src/app/events/nav/buildNav.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  router();
  buildNav();
});
