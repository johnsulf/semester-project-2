export function mediaCarouselComponent(listing) {
  // Creates a container for the media carousel
  const mediaContainer = document.createElement('div');

  if (listing.media && listing.media.length > 0) {
    // Builds the HTML structure
    mediaContainer.innerHTML = `
        <div class="relative mb-4">
          <img id="mainImage" src="${listing.media[0].url}" alt="${listing.media[0].alt}" class="w-full h-auto rounded transition-opacity duration-300">
          <!-- Left Arrow -->
          <button id="prevImage" class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            &#10094;
          </button>
          <!-- Right Arrow -->
          <button id="nextImage" class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
            &#10095;
          </button>
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

// Helper function to initialize carousel events
function initCarouselEvents(container, listing) {
  let currentIndex = 0;
  const mainImage = container.querySelector('#mainImage');
  const thumbnails = container.querySelectorAll('[data-index]');

  const updateMainImage = (index) => {
    // Add fade-out effect
    mainImage.classList.add('opacity-0');

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

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = parseInt(thumbnail.getAttribute('data-index'), 10);
      updateMainImage(currentIndex);
    });
  });

  // Navigation buttons
  const prevButton = container.querySelector('#prevImage');
  const nextButton = container.querySelector('#nextImage');

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
