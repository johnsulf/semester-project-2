import { modalComponent } from '../../components/common/modalComponent.js';
import { createListingFormComponent } from '../../components/common/create-listing/createListingFormComponent.js';

/**
 * Adds an event listener to a button that, when clicked, opens a modal for creating a new listing.
 * Handles form submission, button state, and displays success or error messages.
 *
 * @param {HTMLElement} container - The DOM element containing the button.
 * @param {string} btnId - The ID of the button to attach the event listener to.
 *
 * @example
 * // Assuming you have a container element and a button with ID 'createListingBtn'
 * openCreateListingModal(container, 'createListingBtn');
 */
export function openCreateListingModal(container, btnId) {
  const createListingButton = container.querySelector(`#${btnId}`);
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      const modal = modalComponent(); // Create the modal component
      const form = createListingFormComponent(modal); // Create the form component and pass the modal

      // Set the modal content
      const modalContent = modal.querySelector('.modal-content');
      modalContent.appendChild(form);

      // Append modal to the container
      document.body.appendChild(modal);
    });
  }
}
