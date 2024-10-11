import * as storage from '../storage/index.js';
import { API_KEY } from './constants.js';

export const headers = (contentType) => {
  const token = storage.load('token');
  const headers = {};

  headers['X-Noroff-API-Key'] = API_KEY;

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};
