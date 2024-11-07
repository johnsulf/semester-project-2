import { loginEventListener } from '../events/api/auth/login.js';

/**
 * Renders the login view by injecting the login form into the provided app container
 * and attaching the necessary event listeners for user authentication.
 *
 * This function performs the following actions:
 * 1. Sets the inner HTML of the `app` element to display the login form.
 * 2. Attaches the `loginEventListener` to handle form submissions.
 *
 * @param {HTMLElement} app - The main application container where the login view will be rendered.
 *
 * @example
 * // Assuming you have an element with the ID 'app' in your HTML
 * const appContainer = document.getElementById('app');
 *
 * // Render the login view
 * loginView(appContainer);
 */
export function loginView(app) {
  // Add the login form to the app
  app.innerHTML = `
    <section class="mx-auto max-w-md bg-white p-6 rounded-lg">
        <h1 class="text-2xl font-bold">Login</h1>
        <form id="login-form" class="mt-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Noroff Email"
              class="border p-2 mb-4 w-full rounded-md" 
              required>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              class="border p-2 mb-4 w-full rounded-md" 
              required>
            <button 
              type="submit" 
              id="loginBtn"
              class="
                bg-primary
                text-white 
                py-2 px-4 
                rounded">
                Login
            </button>
        </form>
            <p class="mt-4">
              New user? 
              <a href="#/register" class="text-primary">
                Register
              </a>
            </p>
    </section>
  `;

  // Add the event listener to the form
  loginEventListener();
}
