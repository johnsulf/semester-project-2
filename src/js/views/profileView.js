import { profile } from '../api/auth/authState.js';

export function profileView(app) {
  const user = profile();
  app.innerHTML = `
        <section>
            <h1 class="text-2xl font-bold">Hi, ${user.name}</h1>
        </section>
    `;
}
