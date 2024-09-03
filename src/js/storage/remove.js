/**
 * Remove an item from local storage
 * @param {string} key - The key to remove from local storage
 * @returns {void}
 * @example
 * remove('token');
 * console.log(load('token')); // null
 */

export const remove = (key) => localStorage.removeItem(key);
