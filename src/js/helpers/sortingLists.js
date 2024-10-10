export function sortDescending(list, key) {
  return list.sort((a, b) => b[key] - a[key]);
}

export function sortAscending(list, key) {
  return list.sort((a, b) => a[key] - b[key]);
}
