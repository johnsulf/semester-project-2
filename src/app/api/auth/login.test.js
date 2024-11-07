import { login } from './login';
import 'jest-localstorage-mock';

// Test to check if the function login works
describe('login', () => {
  test('should return a response', async () => {
    const data = await login('kalle_kanin1234@stud.noroff.no', '12345678');
    expect(data).toBeDefined();
  });
});
