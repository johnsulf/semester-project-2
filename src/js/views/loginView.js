import { loginEventListener } from '../events/auth/login.js';

export function loginView(app) {
  app.innerHTML = `
    <section>
        <h1 class="text-2xl font-bold">Login</h1>
        <form id="login-form" class="mt-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              class="border p-2 mb-4 w-full" 
              required>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              class="border p-2 mb-4 w-full" 
              required>
            <button 
              type="submit" 
              class="
                bg-blue-500 
                text-white 
                py-2 px-4 
                rounded">
                Login
            </button>
        </form>
    </section>
  `;

  loginEventListener();
}
