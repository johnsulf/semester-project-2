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
        <p class="mt-1 text-sm text-gray-500">${listing.description}</p>
      </a>
    `;

  return listingElement;
}
