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

function validatePhone() {
  var phoneInput = document.getElementById("phone");
  var phoneError = document.getElementById("phoneError");
  phoneError.textContent = "";
  phoneInput.style.border = "none";

  var phoneNumber = phoneInput.value;
  if (isNaN(phoneNumber) || phoneNumber.length !== 9) {
    phoneError.classList.add("active");
    phoneInput.style.border = "solid 1px red";
    phoneError.textContent = "El numero debe contener 9 digitos";
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

function validateSubject() {
  let subject = document.getElementById("subject");
  let subjectError = document.getElementById("subjectError");
  let selectedValue = subject.value;
  subjectError.textContent = "";
  if (selectedValue === "a") {
    subjectError.classList.add("active");
    subjectError.textContent = "Hay que elegir un asunto";
    return false;
  }
  subject.selectedIndex = 0;
  return true;
}

var loginForm = document.querySelector(".contact-form");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  if (
    validateName() &&
    validatePhone() &&
    validateEmail() &&
    validateSubject()
  ) {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    let phone = document.getElementById("phone");

    name.value = "";
    email.value = "";
    message.value = "";
    phone.value = "";
  }
}
