import { listingEnded } from '../../helpers/bidOnListing.js';
import { searchListings } from '../../api/auction/searchListings.js';
import { listingCardComponent } from '../../components/common/listingCardComponent.js';

export async function populateListings(
  searchResultsContainer,
  bouncerContainer,
  query,
) {
  // Fetch and display search results
  try {
    const results = await searchListings(query);
    bouncerContainer.remove();

    // If no results are found, display a message
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }

    const sortedResults = results.sort((a, b) => {
      return listingEnded(a) - listingEnded(b);
    });

    // Display each listing in a card
    sortedResults.forEach((listing) => {
      const listingCard = listingCardComponent(listing);
      searchResultsContainer.appendChild(listingCard);
    });
  } catch (error) {
    bouncerContainer.remove();
    // Display an error message if the request fails
    searchResultsContainer.innerHTML = `<p class="text-error">Error loading search results: ${error.message}</p>`;
  }
}
