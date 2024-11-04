import { isLoggedIn } from '../../api/auth/authState.js';
import { profile } from '../../api/auth/authState.js';
import { createListingEventListener } from '../../events/nav/create-listing/createListing.js';
import { creditsAndActionsStates } from '../../helpers/creditsAndActionsStates.js';
import { createListingBtn } from '../nav/authenticatedNav/createListingBtn.js';

// Function to create the credits and actions section
export function creditsAndActions() {
  const creditsAndActionsContainer = document.getElementById(
    'creditsAndActionsContainer',
  );

  let content = document.createElement('div');

  if (isLoggedIn()) {
    // Get user's credits
    let credits = 0;
    const user = profile();
    if (user) {
      credits = user.credits;
    }

    // Create content based on credits
    content = loggedInContent(credits);
  } else {
    // Display "Get Onboard" message when not logged in
    content.innerHTML = `
      <div class="text-center">
        <h2 class="mb-4">Get Onboard</h2>
        <p>Join us to start bidding on listings or create your own!</p>
        <a href="#/register" class="bg-primary text-white px-4 py-2 rounded mt-4 inline-block">Register</a>
        <p>Already have an account? <a href="#/login" class="text-primary">Login</a></p>
      </div>
    `;
  }

  creditsAndActionsContainer.appendChild(content);

  return creditsAndActionsContainer;
}

// Function to create content for logged-in users based on their credits
function loggedInContent(credits) {
  const state = contentState(credits);

  // Create the main content container
  const contentDiv = document.createElement('div');
  contentDiv.classList.add(
    'flex',
    'flex-col',
    'md:flex-row',
    'gap-4',
    'items-center',
    'justify-center',
  );

  // Credits display container
  const creditsContainer = document.createElement('div');
  creditsContainer.classList.add(
    'flex',
    'items-center',
    'justify-center',
    'bg-white',
    'py-9',
    'px-10',
    'rounded',
    'shadow',
    'gap-4',
  );

  // Image element
  const img = document.createElement('img');
  img.src = 'src/assets/credits.png';
  img.alt = 'Credits Icon';
  img.classList.add('w-24', 'h-24');

  // Credits text
  const creditsText = document.createElement('div');

  const creditsAmount = document.createElement('p');
  creditsAmount.classList.add(
    'text-4xl',
    'md:text-6xl',
    'font-bold',
    'text-primary',
    'text-center',
  );
  creditsAmount.textContent = credits;

  const creditsLabel = document.createElement('p');
  creditsLabel.classList.add('text-2xl', 'text-gray-600');
  creditsLabel.textContent = 'Your Credits';

  creditsText.appendChild(creditsAmount);
  creditsText.appendChild(creditsLabel);

  // Append image and text to credits container
  creditsContainer.appendChild(img);
  creditsContainer.appendChild(creditsText);

  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.classList.add(
    'bg-white',
    'p-6',
    'rounded',
    'shadow',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
  );

  const actionMessage = document.createElement('p');
  actionMessage.classList.add('text-2xl', 'mb-4', 'text-center');
  actionMessage.textContent = state.message;

  const actionDescription = document.createElement('p');
  actionDescription.classList.add(
    'text-lg',
    'mb-6',
    'text-center',
    'text-gray-700',
  );
  actionDescription.textContent = state.action;

  let button;

  if (!state.buttonRoute) {
    // Create Listing button that opens modal
    button = createListingBtn(state.buttonId);
  } else {
    // Button that navigates to a route
    button = document.createElement('button');
    button.id = state.buttonId;
    button.classList.add('bg-primary', 'text-white', 'px-6', 'py-3', 'rounded');
    button.textContent = state.buttonText;
    button.addEventListener('click', () => {
      location.href = state.buttonRoute;
    });
  }

  // Append elements to action container
  actionContainer.appendChild(actionMessage);
  actionContainer.appendChild(actionDescription);

  actionContainer.appendChild(button);
  if (!state.buttonRoute) {
    createListingEventListener(actionContainer, state.buttonId);
  }

  // Append credits and action containers to main content
  contentDiv.appendChild(creditsContainer);
  contentDiv.appendChild(actionContainer);

  return contentDiv;
}

// Function to return the appropriate state based on credits
function contentState(credits) {
  return creditsAndActionsStates.find(
    (state) => credits >= state.minCredits && credits <= state.maxCredits,
  );
}
