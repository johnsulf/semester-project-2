/**
 * Load data from local storage
 * @param {string} key - The key to load the data from
 * @returns {any}
 * @example
 * const token = load('token');
 * if (token) {
 *  console.log(token);
 * }
 */

export const load = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
