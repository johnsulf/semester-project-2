import { createListing } from '../../api/auction/createListing.js';

export function createListingEventListener(container, data) {
  const createListingButton = container.querySelector('#createListingBtn');
  if (createListingButton) {
    createListingButton.addEventListener('click', () => {
      createListing(data);
      console.log('Create a listing');
    });
  }
}
