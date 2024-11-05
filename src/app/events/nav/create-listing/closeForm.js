// Function to close the form modal
export function closeFormEventListener(form, modal) {
  const closeFormBtn = form.querySelector('#closeFormBtn');
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
}
