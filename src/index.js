import './style.css';
import { scores } from './modules/data.js';
import { fetchData, createData } from './actions.js';
import { showAlert } from './utils.js';

const list = document.querySelector('.list');
const submitButton = document.querySelector('.btn-submit');
const refreshButton = document.querySelector('.btn-refresh');
const user = document.querySelector('#playerName');
const score = document.querySelector('#score');

refreshButton.addEventListener('click', () => location.reload());

const init = () => {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value !== '' && score.value) {
      createData(user.value, score.value);
    } else {
      showAlert('All values are required');
    }
  });
};

init();
fetchData();
