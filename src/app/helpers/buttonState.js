/**
 * Disables a button element, updates its text content, and adjusts its styling to reflect a disabled state.
 *
 * @param {HTMLButtonElement} button - The button element to disable.
 * @param {string} innerText - The text to display on the button while it's disabled.
 * @param {string} removeBg - The CSS class representing the background color to remove.
 * @param {string} addBg - The CSS class representing the background color to add.
 *
 * @example
 * // Disable the login button during form submission
 * disableButton(loginButton, 'Logging in...', 'bg-primary', 'bg-gray-400');
 */
export function disableButton(button, innerText, removeBg, addBg) {
  button.disabled = true;
  button.innerText = innerText;
  button.classList.remove(removeBg);
  button.classList.add('cursor-not-allowed', addBg);
}

/**
 * Enables a button element, updates its text content, and adjusts its styling to reflect an enabled state.
 *
 * @param {HTMLButtonElement} button - The button element to enable.
 * @param {string} innerText - The text to display on the button while it's enabled.
 * @param {string} removeBg - The CSS class representing the background color to remove.
 * @param {string} addBg - The CSS class representing the background color to add.
 *
 * @example
 * // Enable the login button after an error occurs
 * enableButton(loginButton, 'Login', 'bg-gray-400', 'bg-primary');
 */
export function enableButton(button, innerText, removeBg, addBg) {
  button.disabled = false;
  button.innerText = innerText;
  button.classList.remove('cursor-not-allowed', removeBg);
  button.classList.add(addBg);
}
