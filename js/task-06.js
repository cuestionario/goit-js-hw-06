const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value;
  const expectedLength = validationInput.getAttribute('data-length');
  if (inputValue.length === parseInt(expectedLength)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});