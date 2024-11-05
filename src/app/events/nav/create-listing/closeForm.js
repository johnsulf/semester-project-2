/**
 * Attaches a click event listener to the "Close Form" button that removes the modal from the DOM when clicked.
 *
 * @param {HTMLFormElement} form - The form element containing the "Close Form" button.
 * @param {HTMLElement} modal - The modal element to be removed upon closing the form.
 *
 * @example
 * // Assuming you have a form element and a modal element
 * const form = document.querySelector('#createListingForm');
 * const modal = document.querySelector('.modal-overlay');
 *
 * // Attach the close event listener
 * closeFormEventListener(form, modal);
 */
export function closeFormEventListener(form, modal) {
  const closeFormBtn = form.querySelector('#closeFormBtn');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
