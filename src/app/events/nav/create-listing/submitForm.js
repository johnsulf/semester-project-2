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
 * submitCreateListingForm(formElement, mediaUrls, handleFormSubmit);
 */
export function submitCreateListingForm(form, mediaUrls, onSubmitCallback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from being submitted

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

    // Call the onSubmitCallback with the form data
    onSubmitCallback(data);
  });
}
