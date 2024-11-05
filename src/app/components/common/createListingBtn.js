// Function to create the create listing button
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