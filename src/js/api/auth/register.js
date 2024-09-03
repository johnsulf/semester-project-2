import { apiBase } from '../constants.js';
import { register as regEp } from '../endpoints.js';
import { headers } from '../headers.js';

export async function register(name, email, password, avatar) {
  try {
    const response = await fetch(`${apiBase + regEp}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify({ name, email, password, avatar }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

register('Kalle_Kanin', 'kalle_kanin1234@stud.noroff.no', '12345678', {
  url: 'https://www.erlendjohnsen.com/assets/images/profile.png',
  alt: '',
});
