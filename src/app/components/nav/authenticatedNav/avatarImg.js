/**
 * Creates an avatar image element based on the provided user data.
 *
 * @param {Object} userData - The user data object.
 * @param {string} userData.name - The name of the user.
 * @param {Object} [userData.avatar] - The avatar object containing the URL.
 * @param {string} [userData.avatar.url] - The URL of the user's avatar image.
 * @returns {HTMLImageElement} The created avatar image element.
 *
 * @example
 * // Example with a user who has an avatar
 * const user = {
 *   name: 'John Doe',
 *   avatar: {
 *     url: 'https://example.com/avatar.jpg'
 *   }
 * };
 * const avatarElement = avatarImg(user);
 * document.body.appendChild(avatarElement);
 * // This will create an img element with src set to 'https://example.com/avatar.jpg'
 *
 * @example
 * // Example with a user who does not have an avatar
 * const user = {
 *   name: 'Jane Smith'
 * };
 * const avatarElement = avatarImg(user);
 * document.body.appendChild(avatarElement);
 * // This will create an img element with src set to 'https://via.placeholder.com/40'
 */
export function avatarImg(userData) {
  // Get the avatar URL from the user data
  const avatarUrl =
    userData.avatar && userData.avatar.url
      ? userData.avatar.url
      : 'https://via.placeholder.com/40';

  const avatarImg = document.createElement('img'); // Create the image element
  avatarImg.id = 'avatarImg'; // Set the image ID
  avatarImg.src = avatarUrl; // Set the image source
  avatarImg.alt = `${userData.name}'s avatar`; // Set the image alt text
  avatarImg.classList.add('w-14', 'h-14', 'rounded-full', 'cursor-pointer'); // Add classes to the image

  return avatarImg;
}
