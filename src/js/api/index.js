import {
  BASE_URL,
  API_KEY_ENDPOINT,
  LOGIN_ENDPOINT,
  ACCESS_TOKEN,
} from '../constants/constants.js';

async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function getAPIKey() {
  try {
    const response = await fetch(`${BASE_URL}${API_KEY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

login('erlend.johnsen@stud.noroff.no', 'Erlend89');
getAPIKey();
