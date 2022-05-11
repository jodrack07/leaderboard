const BASE_URL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'i1UvxKrc5OCc9DmOVeKd';
const URI = `${BASE_URL}games/${gameId}/scores/`;

export const fetchData = async () => {
  const response = await fetch(URI);
  const data = await response.json();
  get(data);
};
