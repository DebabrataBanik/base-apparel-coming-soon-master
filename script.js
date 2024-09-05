const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = document.querySelector('input[type="text"]');
  const error_msg = form.nextElementSibling;

  const error_icon = document.querySelector('.error-icon');

  if (email.value === "" || !validateEmail(email.value)) {

    error_msg.style.display = 'block';
    error_icon.style.display = 'block';
    email.classList.add('error');
  }
  email.addEventListener('input', () => {
    error_msg.style.display = 'none';
    error_icon.style.display = 'none';
    email.classList.remove('error');
  })

})

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
