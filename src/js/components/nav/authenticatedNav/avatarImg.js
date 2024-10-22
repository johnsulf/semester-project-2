export function avatarImg(userData) {
  const avatarUrl =
    userData.avatar && userData.avatar.url
      ? userData.avatar.url
      : 'https://via.placeholder.com/40';
  const avatarImg = document.createElement('img');
  avatarImg.id = 'avatarImg';
  avatarImg.src = avatarUrl;
  avatarImg.alt = `${userData.name}'s avatar`;
  avatarImg.classList.add('w-12', 'h-12', 'rounded-full', 'cursor-pointer');
  return avatarImg;
}
