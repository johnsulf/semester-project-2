import { enableButton } from './buttonState.js';

/**
 * Handles errors from a response object, updates the button state, and displays an alert message.
 *
 * This function checks if the response contains errors. If errors are found, it re-enables the button,
 * restores its default appearance, displays an alert with the error message, and returns `true` to indicate
 * that errors were handled. If no errors are present, it returns `false`.
 *
 * @param {Object} response - The response object to check for errors. Expected to have an 'errors' property if errors occurred.
 * @param {HTMLButtonElement} button - The button element to re-enable and update if an error is found.
 * @param {string} defaultMessage - The default action name or message to display in the alert and on the button.
 * @returns {boolean} - Returns `true` if errors were handled (i.e., errors were found); otherwise, `false`.
 *
 * @example
 * // Usage in an async function handling form submission
 * const response = await submitForm(data);
 * if (handleErrors(response, submitButton, 'Submission')) {
 *   // Errors were handled, exit the function or handle accordingly
 *   return;
 * }
 * // Continue processing if no errors
 */
export function handleErrors(response, button, defaultMessage) {
  if (response.errors) {
    enableButton(button, defaultMessage, 'bg-gray-400', 'bg-primary');
    alert(`${defaultMessage} failed: ${response.errors[0].message}`);
    return true;
  }
  return false;
}
