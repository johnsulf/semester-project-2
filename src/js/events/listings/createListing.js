import { modalComponent } from '../../components/common/modalComponent.js';
import { createListingFormComponent } from '../../components/listings/createListingFormComponent.js';
import { createListing } from '../../api/auction/createListing.js';
import { getListings } from '../../api/auction/getListings.js';
import { listingComponent } from '../../components/listings/listingComponent.js';

export function createListingEventListener(container) {
  const createListingButton = container.querySelector('#createListingBtn');
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      // Create the form component
      const formComponent = createListingFormComponent(async (data) => {
        // Call createListing with the form data
        try {
          const listing = await createListing(data);

          // Replace modal content with success message
          displaySuccessMessage(listing, modal);

          // Optionally, refresh the listings
          await refreshListings();
        } catch (error) {
          console.error('Error creating listing:', error);
          alert(
            'An error occurred while creating the listing. Please try again.',
          );
        }
      });

      // Create the modal with the form
      const modal = modalComponent(formComponent);

      // Append modal to the container (or document body)
      document.body.appendChild(modal);
    });
  }
}

// Refresh the listings after creating a new one
async function refreshListings() {
  const listingsContainer = document.getElementById('listings-container');
  if (listingsContainer) {
    listingsContainer.innerHTML = '<p>Loading listings...</p>';
    try {
      const listings = await getListings();
      listingsContainer.innerHTML = '';
      listings.forEach((listing) => {
        const listingCard = listingComponent(listing);
        listingsContainer.appendChild(listingCard);
      });
    } catch (error) {
      listingsContainer.innerHTML = `<p class="text-error">Error loading listings: ${error.message}</p>`;
    }
  }
}

// Function to display success message with options
function displaySuccessMessage(listing, modal) {
  const successMessage = document.createElement('div');
  successMessage.classList.add('text-center');

  successMessage.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Listing Created Successfully!</h2>
    <p>Your listing <strong>${listing.title}</strong> has been created.</p>
    <div class="flex justify-center space-x-4 mt-6">
      <a href="#/listing/${listing.id}" id="goToListingBtn" class="bg-primary text-white px-4 py-2 rounded">Go to Listing</a>
      <button id="closeModalBtn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded">Close</button>
    </div>
  `;

  // Replace modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = '';
  modalContent.appendChild(successMessage);

  // Add event listener to close the modal
  const closeModalBtn = successMessage.querySelector('#closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.remove();
    });
  }

  // Add event listener to "Go to Listing" button to close modal
  const goToListingBtn = successMessage.querySelector('#goToListingBtn');
  if (goToListingBtn) {
    goToListingBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
