export function createListingFormComponent(onSubmitCallback) {
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  form.innerHTML = `
      <h2 class="text-xl font-semibold mb-4">Create a New Listing</h2>
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" id="title" required class="mt-1 p-2 border rounded w-full" />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" id="description" rows="4" class="mt-1 p-2 border rounded w-full"></textarea>
      </div>
      <div>
        <label for="media" class="block text-sm font-medium text-gray-700">Media URLs (comma-separated)</label>
        <input type="text" name="media" id="media" class="mt-1 p-2 border rounded w-full" />
      </div>
      <div>
        <label for="endsAt" class="block text-sm font-medium text-gray-700">End Date and Time</label>
        <input type="datetime-local" name="endsAt" id="endsAt" required class="mt-1 p-2 border rounded w-full" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Create Listing</button>
      </div>
    `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const mediaInput = formData.get('media');
    const endsAtInput = formData.get('endsAt');

    // Process media URLs
    const media = mediaInput
      .split(',')
      .map((url) => url.trim())
      .filter((url) => url)
      .map((url) => ({ url, alt: title }));

    // Ensure endsAt is in ISO format
    const endsAt = new Date(endsAtInput).toISOString();

    const data = {
      title,
      description,
      media,
      endsAt,
    };

    // Call the callback with the collected data
    onSubmitCallback(data);
  });

  return form;
}
