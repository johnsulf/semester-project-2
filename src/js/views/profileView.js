import { profile } from '../api/auth/authState.js';

export async function profileView(app) {
  const user = profile();
  app.innerHTML = `
    <section>
      <h1 class="text-2xl font-bold">Hi, ${user.name}</h1>
      <p class="mt-4"><strong>Email:</strong> ${user.email}</p>
      <p><strong>Credits:</strong> ${user.credits}</p>
      ${user.avatar && user.avatar.url ? `<img src="${user.avatar.url}" alt="${user.avatar.alt}" class="w-32 h-32 rounded-full mt-4">` : ''}
      ${user.bio ? `<p class="mt-4"><strong>Bio:</strong> ${user.bio}</p>` : ''}
    </section>
  `;
}
