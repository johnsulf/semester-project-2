import { save } from './save';
import 'jest-localstorage-mock';

describe('save', () => {
  // The save function should save the data to local storage
  it('should save the data to local storage', () => {
    save('token', '12345');
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'token',
      JSON.stringify('12345'),
    );
  });
});
