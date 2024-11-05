import { isLoggedIn } from '../../api/auth/authState.js';
import { profile } from '../../api/auth/authState.js';
import { createListingEventListener } from '../../events/nav/create-listing/createListing.js';
import { creditsAndActionsStates } from '../../helpers/creditsAndActionsStates.js';
import { createListingBtn } from '../common/createListingBtn.js';

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

function loggedInContent(credits) {
  const state = contentState(credits);

  // Create the main content container
  const contentDiv = document.createElement('div');
  contentDiv.classList.add(
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'gap-6',
    'items-center',
    'justify-items-center',
  );

  // Common container classes
  const containerClasses = [
    'bg-white',
    'p-6',
    'rounded',
    'shadow',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
  ];

  // Credits container
  const creditsContainer = document.createElement('div');
  creditsContainer.classList.add(...containerClasses);

  // Image element
  const img = document.createElement('img');
  img.src = 'src/assets/credits.png';
  img.alt = 'Credits Icon';
  img.classList.add('w-20', 'h-20', 'mb-4');

  // Credits text
  const creditsAmount = document.createElement('p');
  creditsAmount.classList.add(
    'text-5xl',
    'md:text-7xl',
    'font-extrabold',
    'text-primary',
    'text-center',
  );
  creditsAmount.textContent = credits;

  const creditsLabel = document.createElement('p');
  creditsLabel.classList.add('text-xl', 'md:text-2xl', 'text-gray-600', 'mt-2');
  creditsLabel.textContent = 'Your Credits';

  // Append elements to credits container
  creditsContainer.appendChild(img);
  creditsContainer.appendChild(creditsAmount);
  creditsContainer.appendChild(creditsLabel);

  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.classList.add(...containerClasses);

  const actionMessage = document.createElement('p');
  actionMessage.classList.add(
    'text-3xl',
    'mb-4',
    'font-semibold',
    'text-center',
  );
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
    button.classList.add(
      'bg-primary',
      'text-white',
      'px-6',
      'py-3',
      'rounded',
      'hover:bg-primary-dark',
      'transition-colors',
      'duration-300',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary',
      'focus:ring-opacity-50',
    );
    button.textContent = state.buttonText;
    button.addEventListener('click', () => {
      location.href = state.buttonRoute;
    });
  }

  // Append elements to action container
  actionContainer.appendChild(actionMessage);
  actionContainer.appendChild(actionDescription);
  actionContainer.appendChild(button);

  // Attach event listener if needed
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
