export function creditsAndActions() {
  return `
    <div class="flex items-center justify-between mt-4">
        <div class="flex items-center gap-1 px-2 py-1 rounded">
            <p class="font-bold">100</p>
            <img src="src/assets/credits.png" alt="Credits icon" width="20">
        </div>
        <div>
            <button class="bg-primary text-white px-4 py-2 rounded">
                Add Credits
            </button>
        </div>
    </div>
    `;
}

// vis credits når logget inn. Vis "Get Onboard" når ikke logget inn

// basert på credits, vis Create listing knapp hvis det er lite credits, eller oppfordre til å by på listings hvis det er mange credits
