import { mediaUrls } from '../../helpers/auction/addMedia.js';
import { disableButton, enableButton } from '../../../helpers/buttonState.js';
import { successModal } from '../../../components/common/create-listing/createListingSuccess.js';
import { createListing } from '../../../api/auction/createListing.js';

/**
 * Attaches a submit event listener to the form, processes the form data upon submission,
 * and invokes the provided callback function with the prepared data object.
 *
 * @param {HTMLFormElement} form - The form element to attach the submit event listener to.
 * @param {string[]} mediaUrls - An array of media URLs added by the user.
 * @param {Function} onSubmitCallback - A callback function to handle the form data upon submission.
 *
 * @example
 * // Assuming you have a form element, media URLs array, and a callback function
 * const formElement = document.querySelector('#createListingForm');
 * const mediaUrls = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'];
 *
 * function handleFormSubmit(data) {
 *   // Handle the submitted data
 *   console.log('Form data:', data);
 * }
 *
 * // Attach the submit event listener
 * submitCreateListing(formElement, mediaUrls, handleFormSubmit);
 */
export function submitCreateListing(form, modal) {
  // handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted

    const submitFormButton = document.querySelector('#submitFormBtn'); // Get the submit button

    // Collect form data
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const endsAtInput = formData.get('endsAt');

    // Process media URLs
    const media = mediaUrls.map((url) => ({ url, alt: title }));

    // Ensure endsAt is in ISO format
    const endsAt = new Date(endsAtInput).toISOString();

    // Prepare the data object
    const data = {
      title,
      description,
      media,
      endsAt,
    };

    disableButton(
      submitFormButton,
      'Creating Listing...',
      'bg-primary',
      'bg-gray-400',
    );

    try {
      const listing = await createListing(data); // Do the HTTP POST request to create the listing

      successModal(listing, modal); // Replace modal content with success message if the above doesnt throw an error
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
  });
}
