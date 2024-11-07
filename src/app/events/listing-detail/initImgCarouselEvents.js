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
export function initImgCarouselEvents(container, listing) {
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
