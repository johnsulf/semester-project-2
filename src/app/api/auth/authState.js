import { load } from '../../storage/index.js';

export const isLoggedIn = () => Boolean(load('token')); // Check if the user is logged in by checking if the token exists

export const profile = () => load('profile'); // Load the user profile by loading the profile from local storage and returning it
