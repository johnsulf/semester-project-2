import { modalComponent } from '../../../components/common/modalComponent.js';
import { createListingFormComponent } from '../../../components/listings/createListingFormComponent.js';
import { createListing } from '../../../api/auction/createListing.js';
import { successModal } from '../../../components/listings/createListingSuccess.js';
import { disableButton, enableButton } from '../../../helpers/buttonState.js';

/**
 * Adds an event listener to a button that, when clicked, opens a modal for creating a new listing.
 * Handles form submission, button state, and displays success or error messages.
 *
 * @param {HTMLElement} container - The DOM element containing the button.
 * @param {string} btnId - The ID of the button to attach the event listener to.
 *
 * @example
 * // Assuming you have a container element and a button with ID 'createListingBtn'
 * createListingEventListener(container, 'createListingBtn');
 */
export function createListingEventListener(container, btnId) {
  const createListingButton = container.querySelector(`#${btnId}`);
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      // Create the modal component
      const modal = modalComponent();

      // Create the form component and pass the modal
      const formComponent = createListingFormComponent(async (data) => {
        const submitFormButton = document.querySelector('#submitFormBtn');
        // Call createListing with the form data
        try {
          disableButton(
            submitFormButton,
            'Creating Listing...',
            'bg-primary',
            'bg-gray-400',
          );

          // Do the HTTP POST request to create the listing
          const listing = await createListing(data);

          // Replace modal content with success message
          successModal(listing, modal);
        } catch (error) {
          alert('An error occurred while creating the listing: ' + error);
        } finally {
          enableButton(
            submitFormButton,
            'Create Listing',
            'bg-gray-400',
            'bg-primary',
          );
        }
      }, modal);

      // Set the modal content
      const modalContent = modal.querySelector('.modal-content');
      modalContent.appendChild(formComponent);

      // Append modal to the container
      document.body.appendChild(modal);
    });
  }
}
