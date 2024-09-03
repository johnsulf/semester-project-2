import { apiBase } from '../constants.js';
import { login as loginEp } from '../endpoints.js';
import { headers } from '../headers.js';
import { save } from '../../storage/save.js';

export async function login(email, password) {
  try {
    const response = await fetch(`${apiBase + loginEp}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const profile = await response.json();
      save('token', profile.accessToken);
      delete profile.accessToken;
      save('profile', profile);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

// login('kalle_kanin1234@stud.noroff.no', '12345678');
