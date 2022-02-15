document.getElementById("login-button").addEventListener("click", function () {
  // user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;

  //   user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  //   check user email & password
  if (userEmail == "admin@bank.com" && userPassword == 12345) {
    window.location.href = "banking.html";
    emailField.value = "";
    passwordField.value = "";
  } else {
    alert("invalid input");
    emailField.value = "";
    passwordField.value = "";
  }
});
