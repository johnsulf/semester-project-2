import { modalComponent } from '../../components/common/modalComponent.js';
import { profile } from '../../api/auth/authState.js';
import { bidOnListingFormComponent } from '../../components/listing-detail/bidOnListingFormComponent.js';

export function placeBidEventListener(container, listing) {
  const placeBidButton = container.querySelector('#placeBidButton');
  if (placeBidButton) {
    placeBidButton.addEventListener('click', () => {
      // Open the modal with the bid form

      const modal = modalComponent();
      const user = profile();
      const form = bidOnListingFormComponent(user, listing, modal);
      // Add the form to the modal content
      const modalContent = modal.querySelector('.modal-content');
      modalContent.appendChild(form);

      // Append the modal to the body
      document.body.appendChild(modal);
    });
  }
}
