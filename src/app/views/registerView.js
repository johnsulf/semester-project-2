import { registerEventListener } from '../events/auth/register.js';

/**
 * Renders the registration view by injecting the registration form into the provided app container
 * and attaching the necessary event listeners for user registration.
 *
 * This function performs the following actions:
 * 1. Sets the inner HTML of the `app` element to display the registration form.
 * 2. Attaches the `registerEventListener` to handle form submissions.
 *
 * @param {HTMLElement} app - The main application container where the registration view will be rendered.
 *
 * @example
 * // Assuming you have an element with the ID 'app' in your HTML
 * const appContainer = document.getElementById('app');
 *
 * // Render the registration view
 * registerView(appContainer);
 */
export function registerView(app) {
  // Add the register form to the app
  app.innerHTML = `
    <section class="mx-auto max-w-md bg-white p-6 rounded-lg">
      <h1 class="text-2xl font-bold">Register</h1>
      <form id="register-form" class="mt-4">
        <input 
          type="text" 
          name="name"
          placeholder="Username" 
          class="border p-2 mb-4 w-full rounded-md" 
          required
          pattern="[A-Za-z0-9_]+"
          title="Username can only contain English letters, numbers, and underscores"
        >
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          title="Email must end with @stud.noroff.no or @noroff.no"
          pattern=".*(@stud\.noroff\.no|@noroff\.no)$"   
          class="border p-2 mb-4 w-full rounded-md" 
          required
        >
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          minlength="8"
          title="Password must contain at least 8 characters"
          class="border p-2 mb-4 w-full rounded-md" 
          required
        >
        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL (optional)"
          class="border p-2 mb-4 w-full rounded-md"
          pattern="|https?://.+"
          title="Please enter a valid URL starting with http:// or https://"
        >
        <button 
          type="submit" 
          class="bg-primary text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
      <p class="mt-4">
        Already have an account? 
        <a href="#/login" class="text-primary">
          Login
        </a>
      </p>
    </section>
  `;

  // Add the event listener to the form
  registerEventListener();
}
