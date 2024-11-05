import router from './src/app/router/index.js';
import { buildNav } from './src/app/components/nav/nav.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  router();
  buildNav();
});
