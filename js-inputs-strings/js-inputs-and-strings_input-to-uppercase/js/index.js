console.clear();
InputField = document.querySelector('[data-js="first-input"]');
submitButton = document.querySelector('[data-js="button-uppercase"]');
// console.log(InputField, submitButton);

submitButton.addEventListener("click", () => {
  oldValue = InputField.value;
  newValue = oldValue.toUpperCase();
  InputField.value = newValue;
  //   console.log(newValue);
});
/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
