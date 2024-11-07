import { initImgCarouselEvents } from '../../events/listing-detail/initImgCarouselEvents.js';

/**
 * Creates a media carousel component for a given listing.
 *
 * This function generates a carousel that displays the listing's media (images),
 * including navigation arrows for cycling through the images and thumbnail previews.
 * It also initializes event listeners to handle carousel interactions.
 *
 * @param {Object} listing - The listing object containing media information.
 * @param {Object[]} listing.media - An array of media objects associated with the listing.
 * @param {string} listing.media[].url - The URL of the media item.
 * @param {string} listing.media[].alt - The alt text for the media item.
 * @returns {HTMLDivElement} - The DOM element containing the media carousel.
 *
 * @example
 * // Assuming you have a listing object with media
 * const listing = {
 *   media: [
 *     { url: 'https://example.com/image1.jpg', alt: 'Image 1' },
 *     { url: 'https://example.com/image2.jpg', alt: 'Image 2' },
 *     // more media items...
 *   ],
 * };
 *
 * // Create the media carousel component
 * const carousel = imgSectionComponent(listing);
 *
 * // Append the carousel to a container
 * document.getElementById('mediaCarouselContainer').appendChild(carousel);
 */
export function imgSectionComponent(listing) {
  const mediaContainer = document.createElement('div'); // Create the media container

  if (listing.media && listing.media.length > 0) {
    // Builds the HTML structure
    mediaContainer.innerHTML = `
        <div class="relative mb-4">
          <div class="relative">
            <img
              id="mainImage"
              src="${listing.media[0].url}"
              alt="${listing.media[0].alt}"
              class="w-full mx-auto rounded transition-opacity duration-300"
            />
            <!-- Left Arrow -->
            <button
              id="prevImage"
              class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white py-2 px-4 rounded-full"
            >
              &#10094;
            </button>
            <!-- Right Arrow -->
            <button
              id="nextImage"
              class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white py-2 px-4 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
        <div class="flex space-x-2 overflow-x-auto">
          ${listing.media
            .map(
              (mediaItem, index) => `
                <img
                  src="${mediaItem.url}"
                  alt="${mediaItem.alt}"
                  class="w-16 h-16 md:w-20 md:h-20 object-cover rounded cursor-pointer border-2 ${
                    index === 0 ? 'border-primary' : 'border-transparent'
                  }"
                  data-index="${index}"
                >
              `,
            )
            .join('')}
        </div>
      `;

    // Adds event listeners for carousel functionality
    initImgCarouselEvents(mediaContainer, listing);
  } else {
    // If no media, displays a placeholder image
    mediaContainer.innerHTML = `
        <img src="https://via.placeholder.com/600" alt="Listing image" class="w-full h-auto rounded">
      `;
  }

  return mediaContainer;
}
