import router from './src/js/router/index.js';
import { updateNav } from './src/js/helpers/updateNav.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  router();
  updateNav();
});
