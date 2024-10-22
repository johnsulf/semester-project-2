import { submitEditAvatarFormListener } from '../../events/profile/submitForm.js';

export function editAvatarFormComponent(modal) {
  // Create the form
  const form = document.createElement('form');
  form.classList.add('space-y-4');

  form.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Update Avatar</h2>
    <div>
      <label for="avatarUrl" class="block text-sm font-medium text-gray-700">Avatar URL</label>
      <input type="url" name="avatarUrl" id="avatarUrl" class="mt-1 p-2 border rounded w-full" required>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Update</button>
    </div>
  `;

  submitEditAvatarFormListener(form, modal);
  return form;
}
