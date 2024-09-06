import { register } from './register';
import 'jest-localstorage-mock';
import 'node-fetch';

describe('register', () => {
  test('should return a response', async () => {
    const data = await register(
      'Kalle_Kanin',
      'kalle_kanin1234@stud.noroff.no',
      '12345678',
      {
        url: 'https://www.erlendjohnsen.com/assets/images/profile.png',
        alt: 'Profile image of Kalle Kanin',
      },
    );
    expect(data).toBeDefined();
  });
});
