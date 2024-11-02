// Function that sorts a list of objects in descending order based on a key
export function sortDescending(list, key) {
  return list.sort((a, b) => b[key] - a[key]);
}

// Function that sorts a list of objects in ascending order based on a key
export function sortAscending(list, key) {
  return list.sort((a, b) => a[key] - b[key]);
}
