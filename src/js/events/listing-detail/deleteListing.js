import { deleteListing } from '../../api/auction/deleteListing.js';

// Function to add an event listener to the delete listing button
export async function deleteListingEventListener(infoContainer, listingId) {
  const deleteBtn = infoContainer.querySelector('#deleteListingBtn');
  deleteBtn.addEventListener('click', async () => {
    try {
      await deleteListing(listingId); // Call the deleteListing API function
      infoContainer.innerHTML =
        '<p class="text-success">Listing deleted successfully!</p>';
    } catch (error) {
      infoContainer.innerHTML = `<p class="text-error">Error deleting listing: ${error.message}</p>`;
    }
  });
}
