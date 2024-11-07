import { categories } from '../../helpers/mockCategories.js';

/**
 * Generates HTML markup for displaying listing categories.
 *
 * Iterates over a predefined list of categories and constructs an HTML string where each category
 * is represented as a clickable link containing the category name and an associated emoji.
 *
 * @returns {string} - The HTML string representing all listing categories.
 *
 * @example
 * // Assuming categories are defined as:
 * // [
 * //   { name: 'Electronics', query: 'electronics', emoji: '📱' },
 * //   { name: 'Books', query: 'books', emoji: '📚' },
 * //   // ...other categories
 * // ]
 * const categoriesHtml = listingCategories();
 * // categoriesHtml will contain the HTML for all categories
 */
export function listingCategories() {
  let categoryHtml = '';
  categories.forEach((category) => {
    categoryHtml += `
        <a href="#/search/${category.query}" class="text-decoration-none">
            <div class="bg-white flex flex-col shadow items-center justify-center rounded py-4 px-2">
                <h3>${category.name}</h3>
                <p class="text-4xl">${category.emoji}</p>
            </div>
        </a>
    `;
  });
  return categoryHtml;
}
