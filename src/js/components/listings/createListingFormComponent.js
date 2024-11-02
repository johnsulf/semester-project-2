import { addMediaEventListener } from '../../events/nav/create-listing/addMedia.js';
import { closeFormEventListener } from '../../events/nav/create-listing/closeForm.js';
import { submitCreateListingForm } from '../../events/nav/create-listing/submitForm.js';

// Function to create the create listing form component
export function createListingFormComponent(onSubmitCallback, modal) {
  const form = document.createElement('form'); // Create the form element
  form.classList.add('space-y-4'); // Add classes to the form

  const mediaUrls = []; // Create an empty array to store media URLs
  const now = new Date(); // Get the current date and time
  const tzOffset = now.getTimezoneOffset() * 60000; // Get the timezone offset in milliseconds
  const localISOTime = new Date(now - tzOffset).toISOString().slice(0, 16); // Get the local ISO time

  // Set the form inner HTML
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
        <input 
            type="url" 
            placeholder="Must start with http:// or https://"
            name="mediaUrl" 
            id="mediaUrl" 
            class="p-2 border rounded w-full" 
        />
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
        <button type="submit" id="submitFormBtn" class="bg-primary text-white px-4 py-2 rounded">Create Listing</button>
    </div>
    `;

  // After creating the HTML, event listeners are added
  addMediaEventListener(mediaUrls, form);
  submitCreateListingForm(form, mediaUrls, onSubmitCallback);
  closeFormEventListener(form, modal);

  return form;
}
