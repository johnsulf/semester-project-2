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
      const result = await response.json();
      const profile = result.data;
      save('token', profile.accessToken);
      delete profile.accessToken;
      save('profile', profile);
      return profile;
    }
  } catch (error) {
    console.error(error);
  }
}

login('kalle_kanin1234@stud.noroff.no', '12345678');
