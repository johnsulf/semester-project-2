import { remove } from './remove';
import 'jest-localstorage-mock';

describe('remove', () => {
  // The remove function should remove the data from local storage
  it('should remove the data from local storage', () => {
    localStorage.setItem('token', JSON.stringify('12345'));
    remove('token');
    expect(localStorage.removeItem).toHaveBeenLastCalledWith('token');
  });
});
