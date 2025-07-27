const input = document.querySelector('.input');
const submit = document.querySelector('a')

let userName = null;

submit.addEventListener('click', function (e) {
  if (input.value == '') {
    alert('Enter your name first!');
    e.preventDefault();
  } 


})