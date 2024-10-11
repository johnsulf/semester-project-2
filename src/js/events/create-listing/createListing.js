import { modalComponent } from '../../components/common/modalComponent.js';
import { createListingFormComponent } from '../../components/listings/createListingFormComponent.js';
import { createListing } from '../../api/auction/createListing.js';
import { displaySuccessMessage } from '../../components/listings/createListingSuccess.js';

export function createListingEventListener(container) {
  const createListingButton = container.querySelector('#createListingBtn');
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      // Create the modal first
      const modal = modalComponent();

      // Create the form component and pass the modal
      const formComponent = createListingFormComponent(async (data) => {
        // Call createListing with the form data
        try {
          const listing = await createListing(data);

          // Replace modal content with success message
          displaySuccessMessage(listing, modal);
        } catch (error) {
          console.error('Error creating listing:', error);
          alert(
            'An error occurred while creating the listing. Please try again.',
          );
        }
      }, modal);

      // Set the modal content
      const modalContent = modal.querySelector('.modal-content');
      modalContent.appendChild(formComponent);

      // Append modal to the container (or document body)
      document.body.appendChild(modal);
    });
  }
}
