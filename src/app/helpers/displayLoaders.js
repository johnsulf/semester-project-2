import { listingCardLoader } from '../components/common/loaders/listingCardLoader.js';

/**
 * Displays skeleton loader elements in the latest listings carousel container while data is being fetched.
 *
 * This function creates a set number of loader elements styled similarly to the actual listing cards.
 * These loaders provide a visual indication to users that content is loading in the background.
 *
 * @param {HTMLElement} carouselContainer - The DOM element where the loaders will be appended.
 *
 * @example
 * // Assuming you have a carousel container with the ID 'latestListingsCarousel'
 * const carouselContainer = document.getElementById('latestListingsCarousel');
 * displayLatestListingsLoader(carouselContainer);
 */

export function displayLatestListingsLoader(carouselContainer) {
  const loadersContainer = document.createElement('div');
  loadersContainer.classList.add('overflow-hidden', 'relative');

  const carouselTrack = document.createElement('div');
  carouselTrack.classList.add(
    'flex',
    'transition-transform',
    'duration-500',
    'ease-in-out',
  );

  const numberOfLoaders = 4; // Number of loader elements to display

  for (let i = 0; i < numberOfLoaders; i++) {
    const loader = listingCardLoader();
    loader.classList.add(
      'flex-shrink-0',
      'w-full',
      'sm:w-1/2',
      'md:w-1/3',
      'lg:w-1/4',
    ); // Ensure loaders have the same sizing as the actual cards
    carouselTrack.appendChild(loader);
  }

  loadersContainer.appendChild(carouselTrack); // Append the loaders to the loaders container

  // Append the loaders container to the carousel container
  carouselContainer.appendChild(loadersContainer);
}
