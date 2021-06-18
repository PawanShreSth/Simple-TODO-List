// TODO CODE

const form = document.forms[0];
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

form.addEventListener('submit', e => {
  if (input.value.length <= 0) {
    e.preventDefault();
    alert('Add Value First');
    return;
  }

  e.preventDefault();
  const newItem = document.createElement('div');
  newItem.innerText = input.value;
  newItem.classList.add('list-item');
  console.log(newItem);
  list.append(newItem);
  input.value = '';

  newItem.addEventListener('click', () => {
    newItem.remove();
  });
});
