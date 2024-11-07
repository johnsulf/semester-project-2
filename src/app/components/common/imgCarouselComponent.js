import { listingCardComponent } from './listingCardComponent.js';

// Function to create a carousel component
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
