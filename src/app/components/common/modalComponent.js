/**
 * Creates a modal component that includes an overlay, a container, a close button, and a content wrapper.
 *
 * The modal can be appended to the document body or any other container.
 * It includes functionality to close the modal when the close button is clicked.
 *
 * @returns {HTMLDivElement} - The modal overlay element containing the modal content.
 *
 * @example
 * // To use the modal component:
 * const modal = modalComponent();
 * document.body.appendChild(modal);
 *
 * // Then append content to the modal's content area:
 * const content = document.createElement('div');
 * content.textContent = 'This is the modal content.';
 * modal.querySelector('.modal-content').appendChild(content);
 */
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
