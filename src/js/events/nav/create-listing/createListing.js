import { modalComponent } from '../../../components/common/modalComponent.js';
import { createListingFormComponent } from '../../../components/listings/createListingFormComponent.js';
import { createListing } from '../../../api/auction/createListing.js';
import { displaySuccessMessage } from '../../../components/listings/createListingSuccess.js';
import { disableButton, enableButton } from '../../../helpers/buttonState.js';

// Function to create a new listing event listener
export function createListingEventListener(container) {
  const createListingButton = container.querySelector('#createListingBtn');
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      // Create the modal component
      const modal = modalComponent();

      // Create the form component and pass the modal
      const formComponent = createListingFormComponent(async (data) => {
        const submitFormButton = document.querySelector('#submitFormBtn');
        console.log(submitFormButton);
        // Call createListing with the form data
        try {
          disableButton(
            submitFormButton,
            'Creating Listing...',
            'bg-primary',
            'bg-gray-400',
          );
          const listing = await createListing(data);

          enableButton(
            submitFormButton,
            'Create Listing',
            'bg-gray-400',
            'bg-primary',
          );
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

      // Append modal to the container
      document.body.appendChild(modal);
    });
  }
}
