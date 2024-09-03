import { load } from '../../storage';

export const isLoggedIn = () => Boolean(load('token'));

export const profile = () => load('profile');
