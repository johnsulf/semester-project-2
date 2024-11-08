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
 * closeCreateListingModal(form, modal);
 */
export function closeCreateListingModal(form, modal) {
  const closeFormBtn = form.querySelector('#closeFormBtn');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}

/**
 * Closes the success modal by removing it from the DOM when the close button is clicked.
 *
 * @param {HTMLElement} successMessage - The element containing the success message and the close button.
 * @param {HTMLElement} modal - The modal element to be removed.
 * @returns {void}
 *
 * @example
 * // Assuming you have elements with IDs 'successMessage' and 'modal'
 * const successMessageElement = document.getElementById('successMessage');
 * const modalElement = document.getElementById('modal');
 * closeSuccesModal(successMessageElement, modalElement);
 * // Clicking the close button will remove the modal from the DOM
 */
export function closeSuccesModal(successMessage, modal) {
  // Add event listener to close the modal
  const closeModalBtn = successMessage.querySelector('#closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}

/**
 * Navigates to the listing page by removing the success modal when the "Go to Listing" button is clicked.
 *
 * @param {HTMLElement} successMessage - The element containing the success message and the "Go to Listing" button.
 * @param {HTMLElement} modal - The modal element to be removed.
 * @returns {void}
 *
 * @example
 * // Assuming you have elements with IDs 'successMessage' and 'modal'
 * const successMessageElement = document.getElementById('successMessage');
 * const modalElement = document.getElementById('modal');
 * goToListingFromSuccessModal(successMessageElement, modalElement);
 * // Clicking the "Go to Listing" button will remove the modal from the DOM
 */
export function goToListingFromSuccessModal(successMessage, modal) {
  // Add event listener to "Go to Listing" button
  const goToListingBtn = successMessage.querySelector('#goToListingBtn');
  if (goToListingBtn) {
    goToListingBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
