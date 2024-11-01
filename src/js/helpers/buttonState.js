export function disableButton(button, innerText, removeBg, addBg) {
  button.disabled = true;
  button.innerText = innerText;
  button.classList.remove(removeBg);
  button.classList.add('cursor-not-allowed', addBg);
}

export function enableButton(button, innerText, removeBg, addBg) {
  button.disabled = false;
  button.innerText = innerText;
  button.classList.remove(removeBg);
  button.classList.add(addBg);
}
