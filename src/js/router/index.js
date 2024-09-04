import { isLoggedIn } from '../api/auth/authState.js';

async function router() {
  const pathname = window.location.pathname;
  console.log(pathname);

  switch (pathname) {
    case '/':
      console.log('Home');
      console.log('Is logged in: ', isLoggedIn());
      break;
    default:
      break;
  }
}

router();
