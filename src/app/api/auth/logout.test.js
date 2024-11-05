import { logout } from './logout';
import 'jest-localstorage-mock';

// Test to check if the function logout works
describe('logout', () => {
  test('should return a response', async () => {
    const data = await logout();
    expect(data).toBeUndefined();
  });
});
