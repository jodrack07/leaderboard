const list = document.querySelector('.list');
export const alert = document.querySelector('.showAlert');

list.innerHTML = '';

export const showAlert = (text, type = 'danger') => {
  alert.innerHTML = `
    <div class="alert alert-${type} mt-3" role="alert">
        ${text}
    </div>
  `;
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000);
};

export const render = ({ result }) => {
  if (result.length < 1) {
    showAlert('No data available yet', 'danger');
    return;
  }

  list.innerHTML = result
    .sort((a, b) => b.score - a.score)
    .map(
      (record, index) => `<tr>
        <th scope="row">${index + 1}</th>
            <td>${record.user}</td>
            <td>${record.score}</td>
        </tr>`,
    )
    .join('');
};
