// Function to create an avatar image element
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
