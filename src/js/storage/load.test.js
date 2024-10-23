import { load } from './load';
import 'jest-localstorage-mock';

describe('load', () => {
  // The load function should return null if no data is found
  it('should return null if no data is found', () => {
    expect(load('token')).toBeNull();
  });

  // The load function should return the data if it is found
  it('should return the data if it is found', () => {
    localStorage.setItem('token', JSON.stringify('12345'));
    expect(load('token')).toBe('12345');
  });
});
