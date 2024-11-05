import { categories } from '../../helpers/mockCategories.js';

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
