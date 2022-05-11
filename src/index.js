import './style.css';
import { scores } from './modules/data.js';
import { fetchData, createData } from './actions.js';
import { showAlert } from './utils.js';

const list = document.querySelector('.list');
list.innerHTML = '';
scores.forEach((score) => {
  list.innerHTML += `
           <p>Name: ${score}</p>
    `;
});
