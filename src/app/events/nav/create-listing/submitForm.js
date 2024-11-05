// Function to submit the create listing form
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
