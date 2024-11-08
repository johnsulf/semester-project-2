import { listingCardComponent } from './listingCardComponent.js';

/**
 * Creates an image carousel component containing listing cards.
 *
 * @param {Array<Object>} listings - An array of listing objects to be displayed in the carousel.
 * @param {string} listings[].title - The title of the listing.
 * @param {Array<Object>} [listings[].media] - An array of media objects associated with the listing.
 * @param {string} listings[].media[].url - The URL of the media item.
 * @param {string} listings[].media[].alt - The alt text for the media item.
 * @returns {HTMLDivElement} The created carousel wrapper element containing the listing cards.
 *
 * @example
 * // Example usage with multiple listings
 * const listings = [
 *   {
 *     title: 'Vintage Clock',
 *     media: [
 *       { url: 'https://example.com/clock.jpg', alt: 'Vintage Clock Image' }
 *     ],
 *   },
 *   {
 *     title: 'Antique Vase',
 *     media: [
 *       { url: 'https://example.com/vase.jpg', alt: 'Antique Vase Image' }
 *     ],
 *   },
 * ];
 * const carousel = imgCarouselComponent(listings);
 * document.getElementById('carousel-container').appendChild(carousel);
 * // This will create and append a carousel with the provided listings to the container.
 */
export function imgCarouselComponent(listings) {
  const carouselWrapper = document.createElement('div'); // Create the carousel wrapper
  carouselWrapper.classList.add('overflow-scroll', 'relative'); // Add classes to the carousel wrapper

  const carouselTrack = document.createElement('div'); // Create the carousel track
  // Add classes to the carousel track
  carouselTrack.classList.add(
    'flex',
    'transition-transform',
    'duration-500',
    'ease-in-out',
  );

  // Add listing cards to the carousel track
  listings.forEach((listing) => {
    const listingCard = listingCardComponent(listing);
    listingCard.classList.add(
      'flex-shrink-0',
      'w-full',
      'sm:w-1/2',
      'md:w-1/3',
      'lg:w-1/4',
      'shadow',
    );
    carouselTrack.appendChild(listingCard);
  });

  carouselWrapper.appendChild(carouselTrack); // Append the carousel track to the carousel wrapper

  return carouselWrapper;
}
