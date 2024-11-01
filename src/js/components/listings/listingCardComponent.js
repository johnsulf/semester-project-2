import { endString, listingEnded } from '../../helpers/bidOnListing.js';

// Function to create a listing card component
export function listingCardComponent(listing) {
  const listingElement = document.createElement('div'); // Create the listing element
  listingElement.classList.add('border', 'p-4', 'rounded-md'); // Add classes to the listing element

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
      <a href="#/listing/${listing.id}" class="group">
        <div class="w-full h-64 overflow-hidden rounded-lg bg-gray-200">
          <img 
            src="${media[0].url}" 
            alt="${media[0].alt}" 
            class="w-full h-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-700">${listing.title}</h3>
        <p class="ends-at-text mt-1 text-sm text-gray-500">${endString(listing)}</p>
      </a>
    `;

  // If the listing has ended, add a badge
  if (ended) {
    const badge = document.createElement('p');
    badge.classList.add(
      'bg-error',
      'text-white',
      'text-center',
      'py-1',
      'px-2',
      'rounded-md',
      'mt-2',
    );
    badge.textContent = 'Ended';
    listingElement.appendChild(badge);
  }
  return listingElement;
}
