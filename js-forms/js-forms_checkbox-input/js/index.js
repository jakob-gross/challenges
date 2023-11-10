console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  success.removeAttribute("hidden", "");
}

tosCheckbox.addEventListener("input", (e) => {
  if (e.target.checked) {
    hideTosError();
  } else {
    showTosError();‚
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.elements.tos.checked) {
    showSuccess();
    alert("Form submitted");
  }
});
console.log();
