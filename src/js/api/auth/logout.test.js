import { logout } from './logout';
import 'jest-localstorage-mock';

describe('logout', () => {
  test('should return a response', async () => {
    const data = await logout();
    expect(data).toBeUndefined();
  });
});
