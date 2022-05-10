import './style.css';
import { scores } from './modules/data.js';

let list = document.querySelector('.list');
list.innerHTML = '';
scores.forEach((score) => {
  list.innerHTML += `
           <p>Name: ${score}</p>
    `;
});
