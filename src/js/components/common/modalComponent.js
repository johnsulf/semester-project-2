export function modalComponent(contentElement) {
  // Create modal elements
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

  closeButton.addEventListener('click', () => {
    modalOverlay.remove();
  });

  // Content wrapper
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.appendChild(contentElement);

  // Assemble modal
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(modalContent);
  modalOverlay.appendChild(modalContainer);

  return modalOverlay;
}
