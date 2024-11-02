// Function to add event listener to the "Add Media" button
export function addMediaEventListener(mediaUrls, form) {
  // Get the form elements
  const mediaUrlInput = form.querySelector('#mediaUrl');
  const addMediaBtn = form.querySelector('#addMediaBtn');
  const mediaList = form.querySelector('#mediaList');

  // Add event listener to the "Add Media" button
  addMediaBtn.addEventListener('click', () => {
    const url = mediaUrlInput.value.trim();
    if (url) {
      // check if url starts with http:// or https://, and display error if not
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        mediaUrlInput.setCustomValidity(
          'Please enter a valid URL starting with http:// or https://',
        );
        mediaUrlInput.reportValidity();
        return;
      }
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

      // Add the URL and remove button to the list item
      listItem.innerHTML = `
            <div class="flex justify-between items-center">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline break-all">${url}</a>
                <button type="button" class="remove-media-btn text-red-500 ml-2">Remove</button>
            </div>
            `;

      // Append the list item to the media list
      mediaList.appendChild(listItem);

      // Add event listener to the remove button
      listItem
        .querySelector('.remove-media-btn')
        .addEventListener('click', () => {
          const index = mediaUrls.indexOf(url); // Find the index of the URL in the array
          if (index > -1) {
            mediaUrls.splice(index, 1); // Remove the URL from the array
          }
          listItem.remove(); // Remove the list item from the media list
        });

      // Clear the input
      mediaUrlInput.value = '';
    }
  });
}
