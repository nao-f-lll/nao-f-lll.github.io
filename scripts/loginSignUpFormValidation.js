function validateName() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  nameError.textContent = "";
  nameInput.style.border = "none";

  var nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  if (!nameRegex.test(nameInput.value)) {
    nameError.classList.add("active");
    nameInput.style.border = "solid 1px red";
    nameError.textContent = "El nombre no debe contener números";
    return false;
  }
  return true;
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  emailError.textContent = "";
  emailInput.style.border = "none";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.classList.add("active");
    emailInput.style.border = "solid 1px red";
    emailError.textContent = "El formato del email es invalido";
    return false;
  }
  return true;
}

function validatePassword() {
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");
  passwordError.textContent = "";
  passwordError.style.marginBottom = "0px";
  passwordInput.style.border = "none";

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.classList.add("active");
    passwordInput.style.border = "solid 1px red";
    passwordError.textContent =
      "La contraseña debe tener una mayúscula, un número y un carácter especial.";
    passwordError.style.marginBottom = "15px";
    return false;
  }
  return true;
}

function validateForm() {
  if (validateEmail() && validatePassword()) {
    alert("hola");
    return true;
  }
  return false;
}
