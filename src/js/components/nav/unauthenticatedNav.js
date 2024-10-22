export function unauthenticatedNav(authSection) {
  authSection.innerHTML = `
      <a href="#/login" class=" mr-4">Log In</a>
      <a href="#/register" class="">Register</a>
    `;
}
