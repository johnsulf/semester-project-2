import { load } from './load';
import 'jest-localstorage-mock';

describe('load', () => {
  it('should return null if no data is found', () => {
    expect(load('token')).toBeNull();
  });

  it('should return the data if it is found', () => {
    localStorage.setItem('token', JSON.stringify('12345'));
    expect(load('token')).toBe('12345');
  });
});
