import { listingCardLoader } from '../components/loaders/listingCardLoader.js';

export const displayLatestListingsLoader = (carouselContainer) => {
  const loadersContainer = document.createElement('div');
  loadersContainer.classList.add('overflow-hidden', 'relative');

  const carouselTrack = document.createElement('div');

  carouselTrack.classList.add(
    'flex',
    'transition-transform',
    'duration-500',
    'ease-in-out',
  );

  const numberOfLoaders = 4; // Amount of loaders to display

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

  loadersContainer.appendChild(carouselTrack); // Append the loaders to the carousel container

  // Append the loaders to the carousel container
  carouselContainer.appendChild(loadersContainer);
};
