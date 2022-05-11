const list = document.querySelector('.list');
export const alert = document.querySelector('.showAlert');

list.innerHTML = '';

export const render = ({ result }) => {
  if (result.length < 1) {
    alert.innerText = 'Not data available yet';
    alert.style.color = 'orange';
    return;
  }

  list.innerHTML = result
    .sort((a, b) => b.score - a.score)
    .map(
      (record, index) => `<tr>
        <th scope="row">${index + 1}</th>
            <td>${record.user}</td>
            <td>${record.score}</td>
        </tr>`
    )
    .join('');
};

export const showAlert = (text, color = 'red') => {
  alert.innerHTML = `
    <div class="alert alert-${type} mt-3" role="alert">
        ${text}
    </div>
  `;
  setTimeout(() => {
    alert.style.display = 'none';
  }, 5000);
};
