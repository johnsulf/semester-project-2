export function createListingFormComponent(onSubmitCallback, modal) {
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  const mediaUrls = [];

  // Get the current date and time in the correct format for the min attribute
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localISOTime = new Date(now - tzOffset).toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm

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
        <label for="mediaUrl" class="block text-sm font-medium text-gray-700">Media URL</label>
        <div class="flex space-x-2 mt-1">
        <input type="text" name="mediaUrl" id="mediaUrl" class="p-2 border rounded w-full" />
        <button type="button" id="addMediaBtn" class="text-primary px-4 py-2 rounded">Add</button>
    </div>
        <ul id="mediaList" class="mt-2"></ul>
    </div>
    <div>
        <label for="endsAt" class="block text-sm font-medium text-gray-700">End Date and Time</label>
        <input type="datetime-local" name="endsAt" id="endsAt" required min="${localISOTime}" class="mt-1 p-2 border rounded w-full" />
    </div>
    <div class="flex justify-end gap-4">
        <button type="button" id="closeFormBtn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded">Close</button>
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Create Listing</button>
    </div>
    `;

  // After setting innerHTML, add event listeners for the media input
  const mediaUrlInput = form.querySelector('#mediaUrl');
  const addMediaBtn = form.querySelector('#addMediaBtn');
  const mediaList = form.querySelector('#mediaList');

  addMediaBtn.addEventListener('click', () => {
    const url = mediaUrlInput.value.trim();
    if (url) {
      // Add the URL to the mediaUrls array
      mediaUrls.push(url);

      // Update the media list display
      const listItem = document.createElement('li');
      listItem.classList.add(
        'flex',
        'justify-between',
        'items-center',
        'border',
        'p-2',
        'rounded',
        'mb-2',
      );

      // Inside the addMediaBtn event listener:
      listItem.innerHTML = `
        <div class="flex justify-between items-center">
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline break-all">${url}</a>
            <button type="button" class="remove-media-btn text-red-500 ml-2">Remove</button>
        </div>
        `;

      mediaList.appendChild(listItem);

      // Add event listener to the remove button
      listItem
        .querySelector('.remove-media-btn')
        .addEventListener('click', () => {
          const index = mediaUrls.indexOf(url);
          if (index > -1) {
            mediaUrls.splice(index, 1);
          }
          listItem.remove();
        });

      // Clear the input
      mediaUrlInput.value = '';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const endsAtInput = formData.get('endsAt');

    // Process media URLs
    // Process media URLs
    const media = mediaUrls.map((url) => ({ url, alt: title }));

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

  const closeFormBtn = form.querySelector('#closeFormBtn');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      modal.remove();
    });
  }

  return form;
}
