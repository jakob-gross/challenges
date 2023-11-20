console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", function () {
  bodyElement.classList.add("dark");
});

lightModeButton.addEventListener("click", function () {
  bodyElement.classList.remove("dark");
});

toggleModeButton.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});
