const form = document.querySelector('form');
const input = document.querySelector('input');
const formAct = document.querySelector('form span');
const error = document.querySelector('.error');
const btns = document.querySelectorAll('button');

let activity = 'cycling';

const updateUI = e => {
  // get clicked activity
  activity = e.target.dataset.activity;

  // remove and add act
  btns.forEach(btn => {
    btn.classList.remove('active');
    e.target.classList.add('active');
  });

  //set id of input
  input.setAttribute('id', activity);

  // replace text in form span
  formAct.textContent = activity;

  // update graph
  update(data);
};

btns.forEach(btn => {
  btn.addEventListener('click', e => updateUI(e));
});

// form submit
form.addEventListener('submit', e => {
  e.preventDefault();

  const distance = parseInt(input.value);
  if (distance) {
    db.collection('activity')
      .add({
        distance,
        activity,
        date: new Date().toString(),
      })
      .then(() => {
        form.reset();
        error.textContent = '';
      });
  } else {
    error.textContent = 'Please enter a value.';
  }
});
