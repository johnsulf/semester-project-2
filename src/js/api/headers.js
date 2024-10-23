import * as storage from '../storage/index.js';
import { API_KEY } from './constants.js';

// Function to create headers for API requests
export const headers = (contentType) => {
  const token = storage.load('token'); // Load the token from local storage
  const headers = {}; // Create an empty object for headers

  // Add the API key to the headers
  headers['X-Noroff-API-Key'] = API_KEY;

  // Add the content type to the headers if it exists
  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  // Add the authorization header if a token exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};
