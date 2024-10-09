import { apiBase } from '../constants';
import { listings } from '../endpoints';

export async function createListing(data) {
  try {
    const response = await fetch(`${apiBase + listings}`, {
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

// "https://images.unsplash.com/photo-1454493246676-c0e063828dce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
