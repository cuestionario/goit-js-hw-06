const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();   // Evitar que la página se recargue
    const emailInput = this.elements.email;   // entrada de correo
    const passwordInput = this.elements.password;   // entrada de contraseña

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === "" || passwordValue === "") {
        alert("Todos los campos deben ser completados.");
    } else {
        const formatoDatos = {
            email: emailValue,
            password: passwordValue,
        };
        console.log(formatoDatos);
        this.reset();
    }
});