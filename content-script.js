"use strict";

const script = document.createElement("script");

script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("main.js"));
const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;
head.insertBefore(script, head.lastChild);

console.log("{!} Antispam on! {!} ");

function getPasswordInput() {
  return document.querySelector('form input[type="password"]');
}

function getFormElement() {
  var passwordInput = getPasswordInput();
  while (!(passwordInput instanceof HTMLFormElement)) {
    passwordInput = passwordInput.parentElement;
  }
  return passwordInput;
}

function getUsernameInput() {
  return getFormElement().querySelector('input[type="text"]');
}

if (getPasswordInput()) {
  getUsernameInput().value = "YOUR_USERNAME";
  getPasswordInput().value = "YOUR_PASSWORD";
}

/*
let para = document.getElementsByTagName("p");
for (elt of para) {
  elt.innerText = "test";
}
*/
