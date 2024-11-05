import { enableButton } from './buttonState.js';

export function handleErrors(response, button, defaultMessage) {
  if (response.errors) {
    enableButton(button, defaultMessage, 'bg-gray-400', 'bg-primary');
    alert(`${defaultMessage} failed: ${response.errors[0].message}`);
    return true;
  }
  return false;
}
