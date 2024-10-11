import { addMediaEventListener } from '../../events/create-listing/addMedia.js';
import { submitCreateListingForm } from '../../events/create-listing/submitCreateListingForm.js';

export function createListingFormComponent(onSubmitCallback, modal) {
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  const mediaUrls = [];
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000;
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
  addMediaEventListener(mediaUrls, form);

  submitCreateListingForm(form, mediaUrls, onSubmitCallback);

  const closeFormBtn = form.querySelector('#closeFormBtn');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      modal.remove();
    });
  }

  return form;
}
