const validationInput = document.getElementById('validation-input');

//cuando se cambia el enfoque del input se ejecuta la siguiente validación
//que se hayan ingresado 6 caracteres, por tanto, el codigo es valido y se 
//resalta el marco en color verde, eliminando la opción de invalido. Lo contrario
//también ocurre.

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