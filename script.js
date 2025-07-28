const input = document.querySelector('.input');
const submit = document.querySelector('a');

submit.addEventListener('click', function (e) {
  if (input.value == '') {
    alert('Enter your name first!');
    e.preventDefault();
  } else {
  localStorage.setItem('yourName', input.value);
  window.location.href = 'quiz.html';
  }
});