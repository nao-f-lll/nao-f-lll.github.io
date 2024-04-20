function validateName() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  nameError.textContent = "";
  nameInput.style.border = "solid 1px black";
  var nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  if (!nameRegex.test(nameInput.value)) {
    nameError.classList.add("active");
    nameInput.style.border = "solid 1px red";
    nameError.textContent = "El nombre debe contener solo texto";
    return false;
  }
  return true;
}

function validateEmail(email) {
  var emailInput = document.getElementById(email);
  if (email === "email-login") {
    var emailError = document.getElementById("email-login-error");
    emailInput.style.border = "none";
  } else {
    var emailError = document.getElementById("email-sign-up-error");
    emailInput.style.border = "solid 1px black";
  }

  emailError.textContent = "";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.classList.add("active");
    emailInput.style.border = "solid 1px red";
    emailError.textContent = "El formato del email es invalido";
    return false;
  }
  return true;
}

function validatePassword(password) {
  var passwordInput = document.getElementById(password);
  if (password === "password-login") {
    var passwordError = document.getElementById("password-login-error");
    passwordInput.style.border = "none";
  } else {
    var passwordError = document.getElementById("password-sign-up-error");
    passwordInput.style.border = "solid 1px black";
  }

  passwordError.textContent = "";
  passwordError.style.marginBottom = "0px";
  passwordError.style.paddingBottom = "0px";

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.classList.add("active");
    passwordInput.style.border = "solid 1px red";
    passwordError.textContent = "La contraseña debe tener una mayúscula, un número y un carácter especial.";
    passwordError.style.marginBottom = "15px";
    if (window.innerWidth <= 360 && password === "password-login") {
      passwordError.style.paddingBottom = "40px";
    }
    return false;
  }
  return true;
}

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateLoginForm("email-login", "password-login");
});

function validateLoginForm(email, password) {
  if (validateEmail(email) && validatePassword(password)) {
    var user = document.querySelector(".sign-in-button");
    var emailInput = document.getElementById(email);
    var passwordInput = document.getElementById(password);
    user.textContent = emailInput.value;
    emailInput.value = "";
    passwordInput.value = "";
    return true;
  }
  return false;
}

let signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateSignUpForm("name", "email-sign-up", "password-sign-up");
});

function validateSignUpForm(name, email, password) {
  if (
    validateName(name) &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    let nameInput = document.getElementById(name);
    var emailInput = document.getElementById(email);
    var passwordInput = document.getElementById(password);
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    return true;
  }
  return false;
}
