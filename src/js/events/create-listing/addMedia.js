export function addMediaEventListener(mediaUrls, form) {
  const mediaUrlInput = form.querySelector('#mediaUrl');
  const addMediaBtn = form.querySelector('#addMediaBtn');
  const mediaList = form.querySelector('#mediaList');

  addMediaBtn.addEventListener('click', () => {
    const url = mediaUrlInput.value.trim();
    if (url) {
      // Add the URL to the mediaUrls array
      mediaUrls.push(url);

      // Update the media list display
      const listItem = document.createElement('li');
      listItem.classList.add(
        'flex',
        'justify-between',
        'items-center',
        'border',
        'p-2',
        'rounded',
        'mb-2',
      );

      // Inside the addMediaBtn event listener:
      listItem.innerHTML = `
            <div class="flex justify-between items-center">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline break-all">${url}</a>
                <button type="button" class="remove-media-btn text-red-500 ml-2">Remove</button>
            </div>
            `;

      mediaList.appendChild(listItem);

      // Add event listener to the remove button
      listItem
        .querySelector('.remove-media-btn')
        .addEventListener('click', () => {
          const index = mediaUrls.indexOf(url);
          if (index > -1) {
            mediaUrls.splice(index, 1);
          }
          listItem.remove();
        });

      // Clear the input
      mediaUrlInput.value = '';
    }
  });
}
