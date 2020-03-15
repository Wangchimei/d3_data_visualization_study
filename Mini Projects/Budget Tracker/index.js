const form = document.querySelector('form');
const name = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (form.name.value && form.cost.value) {
    const item = {
      name: form.name.value,
      cost: parseInt(form.cost.value),
    };

    db.collection('expenses')
      .add(item)
      .then(res => {
        form.reset();
        error.textContent = '';
      });
  } else {
    error.textContent = 'Please enter valid values';
    setTimeout(() => {
      error.textContent = '';
    }, 3000);
  }
});
