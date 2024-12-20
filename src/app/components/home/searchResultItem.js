import { navigateToListing } from '../../events/home/navigateToListingFromSearch.js';
import { endString, listingEnded } from '../../helpers/bidOnListing.js';

/**
 * Creates a search result list item element based on the provided listing data.
 *
 * @param {Object} listing - The listing data object.
 * @param {string} listing.title - The title of the listing.
 * @param {Array<Object>} [listing.media] - An array of media objects associated with the listing.
 * @param {string} [listing.media[].url] - The URL of the media item.
 * @param {string} [listing.media[].alt] - The alt text for the media item.
 * @returns {HTMLLIElement} The created search result list item element.
 *
 * @example
 * // Example usage with media
 * const listing = {
 *   title: 'Vintage Clock',
 *   media: [
 *     { url: 'https://example.com/clock.jpg', alt: 'Vintage Clock Image' }
 *   ],
 * };
 * const searchItem = searchResultItem(listing);
 * document.querySelector('#search-results').appendChild(searchItem);
 * // This will create and append a list item representing the 'Vintage Clock' listing.
 */
export function searchResultItem(listing) {
  const item = document.createElement('li'); // Create the list item element

  // Add classes to the list item
  item.classList.add(
    'p-4',
    'flex',
    'items-center',
    'cursor-pointer',
    'hover:bg-gray-100',
  );

  // Get the media from the listing data
  const media =
    listing.media && listing.media.length > 0
      ? listing.media
      : [
          {
            url: 'https://via.placeholder.com/60',
            alt: 'Placeholder image',
          },
        ];

  const ended = listingEnded(listing); // Check if the listing has ended

  // Set the list item inner HTML
  item.innerHTML = `
        <img src="${media[0].url}" alt="${media[0].alt}" class="w-12 h-12 object-cover rounded mr-4" />
        <div class="flex-1">
          <h3 class="text-lg">${listing.title}</h3>
          <p class="end-at-text text-sm text-gray-500">${endString(listing)}</p>
        </div>
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      `;

  const endAtText = item.querySelector('.end-at-text');
  if (ended) {
    endAtText.classList.add(
      'bg-error',
      'text-white',
      'px-2',
      'rounded',
      'w-fit',
    );
  }
  navigateToListing(item, listing); // Add the click event to navigate to the listing

  return item;
}
