/**
 * Creates a skeleton loader element for a listing card to indicate a loading state.
 *
 * @returns {HTMLDivElement} The created skeleton loader element.
 *
 * @example
 * // Example usage
 * const loader = listingCardLoader();
 * document.getElementById('listings').appendChild(loader);
 * // This will append the skeleton loader to the listings container.
 */
export function listingCardLoader() {
  const listingElement = document.createElement('div'); // Create the listing element
  listingElement.classList.add('p-4', 'rounded-md', 'mx-1', 'bg-white'); // Add classes to the listing element

  // Set the listing element inner HTML
  listingElement.innerHTML = `
      <div class="w-full h-64 overflow-hidden rounded-lg bg-gray-200 animate-pulse"></div>
      <div class="mt-3 h-6 w-2/3 bg-gray-200 rounded animate-pulse"></div>
      <div class="mt-3 h-5 bg-gray-200 rounded animate-pulse"></div>
      <div class="mt-2 h-10 bg-gray-200 w-full rounded animate-pulse flex items-center justify-center">
        <div class="h-4 w-2/4 bg-white rounded"></div>
      </div>  
    `;

  return listingElement;
}
