export function unauthenticatedNav(authSection) {
  authSection.innerHTML = `
   <section>
        <a href="#/login" class="flex flex-col items-center justify-center">
          <img
            src="./src/assets/profile.png"
            alt="Profile icon"
            width="40"
          />
          <p class="font-heading font-bold text-primary">Log In</p>
        </a>
      </section>

    `;
}
