export function createListingBtn() {
  const createListingBtn = document.createElement('button');
  createListingBtn.id = 'createListingBtn';
  createListingBtn.textContent = '+ Create Listing';
  createListingBtn.classList.add(
    'bg-primary',
    'text-white',
    'py-2',
    'px-4',
    'rounded',
  );
  return createListingBtn;
}
