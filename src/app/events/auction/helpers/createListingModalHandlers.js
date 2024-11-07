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

export function closeSuccesModal(successMessage, modal) {
  // Add event listener to close the modal
  const closeModalBtn = successMessage.querySelector('#closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}

export function goToListingFromSuccessModal(successMessage, modal) {
  // Add event listener to "Go to Listing" button
  const goToListingBtn = successMessage.querySelector('#goToListingBtn');
  if (goToListingBtn) {
    goToListingBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
