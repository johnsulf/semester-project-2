import { listingCardComponent } from './listingCardComponent.js';

export function carouselComponent(listings) {
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('overflow-hidden', 'relative');

  const carouselTrack = document.createElement('div');
  carouselTrack.classList.add(
    'flex',
    'transition-transform',
    'duration-500',
    'ease-in-out',
  );

  listings.forEach((listing) => {
    const listingCard = listingCardComponent(listing);
    listingCard.classList.add(
      'flex-shrink-0',
      'w-full',
      'sm:w-1/2',
      'md:w-1/3',
      'lg:w-1/4',
    );
    carouselTrack.appendChild(listingCard);
  });

  carouselWrapper.appendChild(carouselTrack);

  // Navigation buttons
  const prevButton = document.createElement('button');
  prevButton.classList.add(
    'absolute',
    'left-0',
    'top-1/2',
    'transform',
    '-translate-y-1/2',
    'bg-gray-800',
    'text-white',
    'p-2',
    'rounded-full',
    'focus:outline-none',
  );
  prevButton.innerHTML = '&#10094;'; // Left arrow

  const nextButton = document.createElement('button');
  nextButton.classList.add(
    'absolute',
    'right-0',
    'top-1/2',
    'transform',
    '-translate-y-1/2',
    'bg-gray-800',
    'text-white',
    'p-2',
    'rounded-full',
    'focus:outline-none',
  );
  nextButton.innerHTML = '&#10095;'; // Right arrow

  carouselWrapper.appendChild(prevButton);
  carouselWrapper.appendChild(nextButton);

  // Carousel functionality
  let currentIndex = 0;
  const totalItems = listings.length;

  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3; // md
    if (window.innerWidth >= 640) return 2; // sm
    return 1; // xs
  }

  function updateCarousel() {
    const itemsPerView = getItemsPerView();
    const maxIndex = totalItems - itemsPerView;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    const translateX = -(currentIndex * (100 / itemsPerView));
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
  });

  // Update carousel on window resize
  window.addEventListener('resize', () => {
    updateCarousel();
  });

  // Initial update
  updateCarousel();

  return carouselWrapper;
}
