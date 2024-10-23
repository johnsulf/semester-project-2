import { profile } from '../api/auth/authState.js';
import { openEditAvatarModalListener } from '../events/profile/openEditAvatarModal.js';

export async function profileView(app) {
  const user = profile(); // Get the user profile from local storage

  // Render the user profile
  app.innerHTML = `
    <section>
      <h1 class="text-2xl font-bold">Hi, ${user.name}</h1>
      <p class="mt-4"><strong>Email:</strong> ${user.email}</p>
      <p><strong>Credits:</strong> ${user.credits}</p>
      <div class="mt-4 flex items-center">
        ${
          user.avatar && user.avatar.url
            ? `
          <img src="${user.avatar.url}" alt="${user.name}'s avatar" class="w-32 h-32 rounded-full">
        `
            : `
          <div class="w-32 h-32 rounded-full bg-gray-200"></div>
        `
        }
        <button id="editAvatarButton" class="ml-4 bg-primary text-white px-4 py-2 rounded">
          Edit Avatar
        </button>
      </div>
      ${user.bio ? `<p class="mt-4"><strong>Bio:</strong> ${user.bio}</p>` : ''}
    </section>
  `;

  // Add the event listener to the edit avatar button
  openEditAvatarModalListener();
}
