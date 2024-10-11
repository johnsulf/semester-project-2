import { hideSearchResultsContainer } from '../../helpers/searchResults.js';

export function searchResultItem(listing) {
  const item = document.createElement('li');
  item.classList.add(
    'p-4',
    'flex',
    'items-center',
    'cursor-pointer',
    'hover:bg-gray-100',
  );

  item.addEventListener('click', () => {
    hideSearchResultsContainer();
    window.location.hash = `#/listing/${listing.id}`;
  });

  const media =
    listing.media && listing.media.length > 0
      ? listing.media
      : [
          {
            url: 'https://via.placeholder.com/60',
            alt: 'Placeholder image',
          },
        ];

  item.innerHTML = `
        <img src="${media[0].url}" alt="${media[0].alt}" class="w-12 h-12 object-cover rounded mr-4" />
        <div class="flex-1">
          <h3 class="text-lg">${listing.title}</h3>
        </div>
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      `;

  return item;
}
