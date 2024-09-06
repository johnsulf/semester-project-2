import { login } from './login';
import 'jest-localstorage-mock';
import 'node-fetch';

describe('login', () => {
  test('should return a response', async () => {
    const data = await login('kalle_kanin1234@stud.noroff.no', '12345678');
    expect(data).toBeDefined();
  });
});
