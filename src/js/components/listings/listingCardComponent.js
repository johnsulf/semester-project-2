import { placeBidEventListener } from '../../events/auction/placeBid.js';
import { endString, listingEnded } from '../../helpers/bidOnListing.js';

// Function to create a listing card component
export function listingCardComponent(listing) {
  const listingElement = document.createElement('div'); // Create the listing element
  listingElement.classList.add('p-4', 'rounded-md', 'mx-1', 'bg-white'); // Add classes to the listing element

  // Get the media from the listing data
  const media =
    listing.media && listing.media.length > 0
      ? listing.media
      : [
          {
            url: 'https://via.placeholder.com/300',
            alt: 'Placeholder image',
          },
        ];

  // Check if the listing has ended
  const ended = listingEnded(listing);

  // Set the listing element inner HTML
  listingElement.innerHTML = `
      <a href="#/listing/${listing.id}">
        <div class="w-full h-64 overflow-hidden rounded-lg">
          <img 
            src="${media[0].url}" 
            alt="${media[0].alt}" 
            class="w-full h-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-700">${listing.title}</h3>
        <p class="ends-at-text mt-1 text-sm text-gray-500">${endString(listing)}</p>
      </a>
    `;

  // Create a Place bid button that will be disabled if the listing has ended
  const placeBidButton = document.createElement('button');
  placeBidButton.id = 'placeBidButton';
  placeBidButton.classList.add(
    'text-white',
    'py-2',
    'w-full',
    'rounded',
    'mt-2',
  );

  // If the listing has not ended, add a Place bid button
  if (!ended) {
    placeBidButton.classList.add('bg-primary');
    placeBidButton.textContent = 'Place a Bid';
  } else {
    placeBidButton.classList.add('bg-error', 'cursor-not-allowed');
    placeBidButton.textContent = 'Ended';
    placeBidButton.disabled = true;
  }
  listingElement.appendChild(placeBidButton);
  placeBidEventListener(listingElement, listing);
  return listingElement;
}
