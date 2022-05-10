import './style.css';
import { scores } from './modules/data.js';

const list = document.querySelector('.list');
list.innerHTML = '';
scores.forEach((score) => {
  list.innerHTML += `
           <p>Name: ${score}</p>
    `;
});
