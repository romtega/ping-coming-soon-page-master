"use strict";

const form = document.querySelector("#form");
const inputForm = document.querySelector("#input-form");
const inputWarning = document.querySelector("#input-warning");

function validEmail() {
  inputForm.classList.remove("input-warning");
  inputWarning.classList.add("hidden");
}

function notValidEmail() {
  inputWarning.classList.remove("hidden");
  inputForm.classList.add("input-warning");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const testEmail = emailRegex.test(inputForm.value.trim());

  if (testEmail) {
    validEmail();
  } else {
    notValidEmail();
  }
});
