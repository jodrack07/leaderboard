const list = document.querySelector('.list');
export const alert = document.querySelector('.alert');

list.innerHTML = '';

export const render = ({ result }) => {
  if (result.length < 1) {
    alert.innerText = 'Not data available yet';
    alert.style.color = 'orange';
    return;
  }

  list.innerHTML = result
    .sort((a, b) => b.score - a.score)
    .map((record) => `<li>${record.user} : ${record.score}</li>`)
    .join('');
};

export const showAlert = (text, color = 'red') => {
  alert.innerHTML = text;
  alert.style.color = color;
  alert.style.display = 'block';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 5000);
};
