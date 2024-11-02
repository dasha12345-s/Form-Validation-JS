const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let errorMsg = [];

  if (email.value === "" || email.value == null) {
    errorMsg.push("Name is required");
  }

  if (password.value.length <= 6) {
    errorMsg.push("Password id too short");
  }

  if (password.value === "password") {
    errorMsg.push("Use stronger password");
  }

  if (password.value.length >= 60) {
    errorMsg.push("Password must be less then 60 character");
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    errorElement.innerText = errorMsg.join(", ");
  }
});
