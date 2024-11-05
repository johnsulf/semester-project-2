import { isLoggedIn } from '../../api/auth/authState.js';
import { profile } from '../../api/auth/authState.js';
import { createListingEventListener } from '../../events/nav/create-listing/createListing.js';
import { creditsAndActionsStates } from '../../helpers/creditsAndActionsStates.js';
import { createListingBtn } from '../common/createListingBtn.js';

/**
 * Creates and populates the credits and actions section based on the user's authentication state.
 *
 * If the user is logged in, it displays their credits and relevant actions.
 * If the user is not logged in, it displays prompts to register or log in.
 *
 * @returns {HTMLElement} - The populated credits and actions container element.
 *
 * @example
 * // Assuming you have an element with the ID 'creditsAndActionsContainer' in your HTML
 * creditsAndActions();
 */
export async function creditsAndActions() {
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

    // Create h2 header
    const header = document.createElement('h2');
    header.classList.add('mb-4');
    header.textContent = 'Your Wallet';
    creditsAndActionsContainer.appendChild(header);

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

/**
 * Generates the content for the credits and actions section for authenticated users.
 *
 * @param {number} credits - The number of credits the user has.
 * @returns {HTMLElement} - The content element containing credits information and actions.
 *
 * @example
 * const content = loggedInContent(user.credits);
 * creditsAndActionsContainer.appendChild(content);
 */
function loggedInContent(credits) {
  const state = contentState(credits);

  // Create the main content container
  const contentDiv = document.createElement('div');
  contentDiv.classList.add(
    'flex',
    'flex-col',
    'bg-white',
    'p-4',
    'md:flex-row',
    'md:gap-24',
    'items-center',
    'justify-center',
  );

  // Common container classes
  const containerClasses = [
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
    'text-3xl',
    'md:text-5xl',
    'font-extrabold',
    'text-primary',
    'text-center',
  );
  creditsAmount.textContent = credits;

  const creditsLabel = document.createElement('p');
  creditsLabel.classList.add('text-normal');
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
    'text-2xl',
    'my-4',
    'md:max-w-44',
    'font-semibold',
    'text-center',
  );
  actionMessage.textContent = state.message;

  const actionDescription = document.createElement('p');
  actionDescription.classList.add('text-lg', 'mb-4', 'text-center');
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

  // Attach event listener if needed
  if (!state.buttonRoute) {
    createListingEventListener(actionContainer, state.buttonId);
  }

  // Append credits and action containers to main content
  contentDiv.appendChild(creditsContainer);
  contentDiv.appendChild(actionContainer);

  return contentDiv;
}

/**
 * Determines the appropriate state for the credits and actions section based on the user's credits.
 *
 * @param {number} credits - The number of credits the user has.
 * @returns {Object|undefined} - The state object matching the user's credits range, or undefined if no match is found.
 *
 * @example
 * const state = contentState(user.credits);
 * if (state) {
 *   // Use the state to render content
 * }
 */
function contentState(credits) {
  return creditsAndActionsStates.find(
    (state) => credits >= state.minCredits && credits <= state.maxCredits,
  );
}
