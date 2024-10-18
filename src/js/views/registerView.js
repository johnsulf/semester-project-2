import { registerEventListener } from '../events/auth/register.js';

export function registerView(app) {
  app.innerHTML = `
    <section class="mx-auto max-w-md">
      <h1 class="text-2xl font-bold">Register</h1>
      <form id="register-form" class="mt-4">
        <input 
          type="text" 
          name="name"
          placeholder="Username" 
          class="border p-2 mb-4 w-full" 
          required
        >
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          class="border p-2 mb-4 w-full" 
          required
        >
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          class="border p-2 mb-4 w-full" 
          required
        >
        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL (optional)"
          class="border p-2 mb-4 w-full"
        >
        <button 
          type="submit" 
          class="bg-green-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
      <p class="mt-4">
        Already have an account? 
        <a href="#/login" class="text-blue-500">
          Login
        </a>
      </p>
    </section>
  `;

  registerEventListener();
}
