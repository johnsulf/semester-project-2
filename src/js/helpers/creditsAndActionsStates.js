export const creditsAndActionsStates = [
  {
    minCredits: 0,
    maxCredits: 0,
    message: 'No Credits? Oh no! 😢',
    action: 'Create listings to gain more credits.',
    buttonText: 'Create Listing',
    buttonId: 'createListingButton',
    buttonRoute: null,
  },
  {
    minCredits: 1,
    maxCredits: 400,
    message: 'Low on Credits? 😕',
    action: 'Create listings to gain more credits.',
    buttonText: 'Create Listing',
    buttonId: 'createListingButton',
    buttonRoute: null,
  },
  {
    minCredits: 401,
    maxCredits: Infinity,
    message: 'You have plenty of Credits! 😃',
    action: 'Start bidding on listings!',
    buttonText: 'Browse Listings',
    buttonId: 'browseListingsButton',
    buttonRoute: '#/search/.',
  },
];
