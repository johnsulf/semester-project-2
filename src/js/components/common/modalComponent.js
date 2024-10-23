// Function to create a modal component
export function modalComponent() {
  // Modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add(
    'fixed',
    'inset-0',
    'bg-black',
    'bg-opacity-50',
    'flex',
    'items-center',
    'justify-center',
    'z-50',
  );

  // Modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add(
    'bg-white',
    'p-6',
    'rounded',
    'shadow-lg',
    'relative',
    'max-w-lg',
    'w-full',
  );

  // Close button
  const closeButton = document.createElement('button');
  closeButton.classList.add(
    'absolute',
    'top-2',
    'right-2',
    'text-gray-500',
    'hover:text-gray-700',
  );
  closeButton.innerHTML = '&times;';

  // Close modal when close button is clicked
  closeButton.addEventListener('click', () => {
    modalOverlay.remove();
  });

  // Content wrapper
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Assemble modal
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(modalContent);
  modalOverlay.appendChild(modalContainer);

  return modalOverlay;
}
