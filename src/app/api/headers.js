import * as storage from '../storage/index.js';
import { API_KEY } from './constants.js';

/**
 * Creates headers for API requests, including API key, content type, and authorization token.
 *
 * @param {string} contentType - The content type of the request (e.g., 'application/json').
 * @param {boolean} [includeToken=true] - Whether to include the authorization token in the headers.
 * @returns {Object} The headers object to be used in API requests.
 *
 * @example
 * // Example usage with content type and token
 * const requestHeaders = headers('application/json');
 * // Returns:
 * // {
 * //   'X-Noroff-API-Key': 'your-api-key',
 * //   'Content-Type': 'application/json',
 * //   'Authorization': 'Bearer your-token'
 * // }
 */
export const headers = (contentType, includeToken = true) => {
  let token;
  if (includeToken) {
    token = storage.load('token'); // Load the token from local storage
  }
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
