import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { profileView } from '../views/profileView.js';
import { listingView } from '../views/listingView.js';
import { listingsView } from '../views/listingsView.js';

// the routes for the application
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

export default routes;
