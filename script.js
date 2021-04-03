const form = document.querySelector('.bot__form form');

form.addEventListener('submit', event => {
  event.preventDefault()
  const value = event.target.input.value
  return console.log(value);
})

console.log(form);
