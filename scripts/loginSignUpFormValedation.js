const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginForm = document.querySelector(".login-form");

// Remove quotes and use const for the regular expression
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// Example usage:
const isValidEmail = emailPattern.test(loginEmail.value);

if (isValidEmail) {
  // Email is valid
  console.log("Valid email address");
} else {
  // Email is not valid
  console.log("Invalid email address");
}
