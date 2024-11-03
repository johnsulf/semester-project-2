import { modalComponent } from '../../components/common/modalComponent.js';
import { isLoggedIn, profile } from '../../api/auth/authState.js';
import { bidOnListingFormComponent } from '../../components/listing-detail/bidOnListingFormComponent.js';

// Function to add an event listener to the place bid button
export function placeBidEventListener(container, listing) {
  const placeBidButton = container.querySelector('#placeBidButton');

  // If the button exists, add the event listener
  if (placeBidButton) {
    placeBidButton.addEventListener('click', () => {
      if (!isLoggedIn()) {
        alert('You must be logged in to place a bid.');
        window.location.hash = '#/login';
        return;
      } else {
        // If the user is not logged in, redirect to the login page
        const modal = modalComponent(); // Create a modal
        const user = profile(); // Get the user profile
        const form = bidOnListingFormComponent(user, listing, modal); // Create the form

        // Add the form to the modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.appendChild(form);

        // Append the modal to the body
        document.body.appendChild(modal);
      }
    });
  }
}
