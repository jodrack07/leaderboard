import { render, showAlert } from './utils.js';

const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'i1UvxKrc5OCc9DmOVeKd';
const URI = `${BASE_URL}games/${gameId}/scores/`;

export const fetchData = async () => {
  const response = await fetch(URI);
  const data = await response.json();
  render(data);
};

export const createData = async (user, score) => {
  try {
    const response = await fetch(URI, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    showAlert('Leaderboard score created correctly.', 'green');
  } catch (error) {
    return error;
  }
};
