/**
 * Save data to local storage
 * @param {string} key - The key to save the data under
 * @param {any} value - The data to save
 * @returns {void}
 * @example
 * save('token', '1234567890abcdef');
 */

export const save = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
