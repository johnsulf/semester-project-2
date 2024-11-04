import { listingCardComponent } from './listingCardComponent.js';

// Function to create a carousel component
export function carouselComponent(listings) {
  const carouselWrapper = document.createElement('div'); // Create the carousel wrapper
  carouselWrapper.classList.add('overflow-hidden', 'relative'); // Add classes to the carousel wrapper

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

  // Add buttons to the carousel
  const prevButton = document.createElement('button');
  prevButton.classList.add(
    'absolute',
    'left-0',
    'top-1/2',
    'transform',
    'bg-secondary',
    'hover:bg-primary',
    'transition-colors',
    'duration-300',
    'text-white',
    'py-2',
    'px-4',
    'rounded-full',
    'focus:outline-none',
  );
  prevButton.innerHTML = '&#10094;'; // Left arrow

  // Create the next button
  const nextButton = document.createElement('button');
  nextButton.classList.add(
    'absolute',
    'right-0',
    'top-1/2',
    'transform',
    'bg-secondary',
    'hover:bg-primary',
    'transition-colors',
    'duration-300',
    'text-white',
    'py-2',
    'px-4',
    'rounded-full',
    'focus:outline-none',
  );
  nextButton.innerHTML = '&#10095;'; // Right arrow

  // Append the buttons to the carousel wrapper
  carouselWrapper.appendChild(prevButton);
  carouselWrapper.appendChild(nextButton);

  // Carousel functionality
  let currentIndex = 0;
  const totalItems = listings.length;

  // Function to get the number of items per view
  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3; // md
    if (window.innerWidth >= 640) return 2; // sm
    return 1; // xs
  }

  // Function to update the carousel
  function updateCarousel() {
    const itemsPerView = getItemsPerView();
    const maxIndex = totalItems - itemsPerView;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    const translateX = -(currentIndex * (100 / itemsPerView));
    carouselTrack.style.transform = `translateX(${translateX}%)`;
  }

  // Event listeners for carousel buttons
  prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });

  // Event listener for the next button
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
