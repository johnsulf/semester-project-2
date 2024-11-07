/**
 * Sets the navigation bar for unauthenticated users by inserting a login link into the provided authentication section.
 *
 * This function updates the `authSection` element's inner HTML to display a login option,
 * including an icon and a "Log In" label. It is used to guide unauthenticated users
 * to the login page.
 *
 * @param {HTMLElement} authSection - The DOM element where the unauthenticated navigation elements will be inserted.
 *
 * @example
 * // Assuming you have an element with the ID 'authSection' in your HTML
 * const authSection = document.getElementById('authSection');
 *
 * // Set the navigation bar for unauthenticated users
 * unauthenticatedNav(authSection);
 */

export function unauthenticatedNav(authSection) {
  authSection.innerHTML = `
   <section>
        <a href="#/login" class="flex flex-col items-center justify-center">
          <img
            src="./src/assets/profile.png"
            alt="Profile icon"
            width="40"
          />
          <p class="font-heading font-bold text-primary">Log In</p>
        </a>
      </section>
    `;
}
