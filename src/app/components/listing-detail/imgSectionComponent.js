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
    initCarouselEvents(mediaContainer, listing);
  } else {
    // If no media, displays a placeholder image
    mediaContainer.innerHTML = `
        <img src="https://via.placeholder.com/600" alt="Listing image" class="w-full h-auto rounded">
      `;
  }

  return mediaContainer;
}

/**
 * Initializes the event listeners for the media carousel, including thumbnail clicks and navigation buttons.
 *
 * @param {HTMLDivElement} container - The DOM element containing the media carousel.
 * @param {Object} listing - The listing object containing media information.
 * @param {Object[]} listing.media - An array of media objects associated with the listing.
 * @param {string} listing.media[].url - The URL of the media item.
 * @param {string} listing.media[].alt - The alt text for the media item.
 *
 * @example
 * // Assuming you have a media container and a listing object
 * const container = document.getElementById('mediaCarouselContainer');
 * const listing = {
 *   media: [
 *     { url: 'https://example.com/image1.jpg', alt: 'Image 1' },
 *     { url: 'https://example.com/image2.jpg', alt: 'Image 2' },
 *     // more media items...
 *   ],
 * };
 *
 * // Initialize carousel events
 * initCarouselEvents(container, listing);
 */
function initCarouselEvents(container, listing) {
  let currentIndex = 0;
  const mainImage = container.querySelector('#mainImage');
  const thumbnails = container.querySelectorAll('[data-index]');

  /**
   * Updates the main image in the carousel and highlights the corresponding thumbnail.
   *
   * @param {number} index - The index of the media item to display.
   */
  const updateMainImage = (index) => {
    // Add fade-out effect
    mainImage.classList.add('opacity-0');

    // setTimeout to allow fade-out effect to take place
    setTimeout(() => {
      mainImage.src = listing.media[index].url;
      mainImage.alt = listing.media[index].alt;

      // Update thumbnail borders
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('border-primary');
        thumb.classList.add('border-transparent');
      });
      thumbnails[index].classList.remove('border-transparent');
      thumbnails[index].classList.add('border-primary');

      // Remove fade-out effect
      mainImage.classList.remove('opacity-0');
    }, 300);
  };

  // Thumbnail click events
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = parseInt(thumbnail.getAttribute('data-index'), 10);
      updateMainImage(currentIndex);
    });
  });

  // Navigation buttons
  const prevButton = container.querySelector('#prevImage');
  const nextButton = container.querySelector('#nextImage');

  // Add event listeners for navigation buttons
  prevButton.addEventListener('click', () => {
    currentIndex =
      (currentIndex - 1 + listing.media.length) % listing.media.length;
    updateMainImage(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % listing.media.length;
    updateMainImage(currentIndex);
  });
}
