import router from './src/js/router/index.js';
import { buildNav } from './src/js/components/nav/nav.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  router();
  buildNav();
});
