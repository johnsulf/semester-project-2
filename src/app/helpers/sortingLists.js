/**
 * Sorts an array of objects in **descending order** based on a specified key.
 *
 * **Note:** This function modifies the original array by sorting it in place.
 *
 * @param {Array<Object>} list - The array of objects to be sorted.
 * @param {string} key - The key within the objects to sort by.
 * @returns {Array<Object>} - The sorted array of objects.
 *
 * @example
 * // Example array of objects
 * const items = [
 *   { name: 'Apple', price: 1.2 },
 *   { name: 'Banana', price: 0.8 },
 *   { name: 'Cherry', price: 2.5 },
 * ];
 *
 * // Sort the items in descending order by price
 * const sortedItems = sortDescending(items, 'price');
 *
 * // sortedItems is now:
 * // [
 * //   { name: 'Cherry', price: 2.5 },
 * //   { name: 'Apple', price: 1.2 },
 * //   { name: 'Banana', price: 0.8 },
 * // ]
 */

export function sortDescending(list, key) {
  return list.sort((a, b) => b[key] - a[key]);
}

/**
 * Sorts an array of objects in **ascending order** based on a specified key.
 *
 * **Note:** This function modifies the original array by sorting it in place.
 *
 * @param {Array<Object>} list - The array of objects to be sorted.
 * @param {string} key - The key within the objects to sort by.
 * @returns {Array<Object>} - The sorted array of objects.
 *
 * @example
 * // Example array of objects
 * const items = [
 *   { name: 'Apple', price: 1.2 },
 *   { name: 'Banana', price: 0.8 },
 *   { name: 'Cherry', price: 2.5 },
 * ];
 *
 * // Sort the items in ascending order by price
 * const sortedItems = sortAscending(items, 'price');
 *
 * // sortedItems is now:
 * // [
 * //   { name: 'Banana', price: 0.8 },
 * //   { name: 'Apple', price: 1.2 },
 * //   { name: 'Cherry', price: 2.5 },
 * // ]
 */

export function sortAscending(list, key) {
  return list.sort((a, b) => a[key] - b[key]);
}
