import { Listing } from '../../models/listing.js';

export function listingComponent(listing) {
  const item = Listing.fromJson(listing);
  const listingElement = document.createElement('div');
  listingElement.classList.add('border', 'p-4', 'rounded-md');

  // Handle media, use a placeholder if no media is available
  const media =
    item.media && item.media.length > 0
      ? item.media
      : [
          {
            url: 'https://via.placeholder.com/300',
            alt: 'Placeholder image',
          },
        ];

  listingElement.innerHTML = `
    <a href="#/listing/${item.id}" class="group">
    <div class="w-full h-64 overflow-hidden rounded-lg bg-gray-200">
        <img 
        src="${media[0].url}" 
        alt="${media[0].alt}" 
        class="w-full h-full object-cover object-center group-hover:opacity-75">
    </div>
    <h3 class="mt-4 text-sm text-gray-700">${item.title}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">${new Date(item.created).toLocaleDateString()}</p>
    </a>
`;

  return listingElement;
}
