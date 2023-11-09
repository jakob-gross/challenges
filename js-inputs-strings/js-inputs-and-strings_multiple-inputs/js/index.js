/*

Important: Create a fork for each sub challenge!
Implement the following functionality:







*/

// 1. On button click: The value of the first input field is copied into the second input field
// const firstInput = document.querySelector("[data-js=first-input]");
// const secondInput = document.querySelector("[data-js=second-input]");
// const button = document.querySelector("[data-js=button]");

// button.addEventListener("click", (e) => {
////   console.log("hi");
//   secondInput.value = firstInput.value;
// });

// 2. On button click: The value of the first input field is copied in uppercase into the second input field
// const firstInput = document.querySelector("[data-js=first-input]");
// const secondInput = document.querySelector("[data-js=second-input]");
// const button = document.querySelector("[data-js=button]");

// button.addEventListener("click", (e) => {
// //   console.log("hi");
//   secondInput.value = firstInput.value.toUpperCase();
// });

// 3. On button click: The values of the two input fields switch.
const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", (e) => {
  // console.log("hi");
  firstOldValue = firstInput.value;
  secondOldValue = secondInput.value;
  secondInput.value = firstOldValue;
  firstInput.value = secondOldValue;
});
