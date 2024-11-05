/**
 * Displays a success message when a listing is successfully created.
 *
 * This function replaces the content of the provided modal with a success message,
 * including options to go to the newly created listing or close the modal.
 * It also sets up event listeners for the buttons within the success message.
 *
 * @param {Object} listing - The listing object that was created, containing at least 'id' and 'title' properties.
 * @param {HTMLElement} modal - The modal element where the success message will be displayed.
 *
 * @example
 * // After creating a listing and receiving the listing object and modal:
 * displaySuccessMessage(listing, modal);
 */
export function displaySuccessMessage(listing, modal) {
  const successMessage = document.createElement('div'); // Create the success message element
  successMessage.classList.add('text-center'); // Add classes to the success message element

  // Set the success message inner HTML
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

  // Add event listener to "Go to Listing" button
  const goToListingBtn = successMessage.querySelector('#goToListingBtn');
  if (goToListingBtn) {
    goToListingBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
