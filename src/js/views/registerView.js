export function registerView(app) {
  app.innerHTML = `
        <section>
            <h1 class="text-2xl font-bold">Register</h1>
            <form id="register-form" class="mt-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  class="border p-2 mb-4 w-full" 
                  required>
                <input 
                  type="password" 
                  placeholder="Password" 
                  class="border p-2 mb-4 w-full" 
                  required>
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

  // Add event listener for the register form
  const form = document.getElementById('register-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add your register handling logic here
    console.log('Register form submitted!');
  });
}
