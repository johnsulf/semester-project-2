/**
 * Creates a button element for creating a new listing.
 *
 * @param {string} id - The ID to assign to the create listing button.
 * @returns {HTMLButtonElement} The created create listing button element.
 *
 * @example
 * // Example usage
 * const button = createListingBtn('createListingBtn');
 * document.body.appendChild(button);
 * // This will create a button with the specified ID and append it to the document body.
 */
export function createListingBtn(id) {
  const createListingBtn = document.createElement('button'); // Create the button element
  createListingBtn.id = id; // Set the button ID
  createListingBtn.textContent = '+ Create Listing'; // Set the button text

  // Add classes to the button
  createListingBtn.classList.add(
    'bg-primary',
    'text-white',
    'py-2',
    'px-4',
    'rounded',
  );

  return createListingBtn;
}
