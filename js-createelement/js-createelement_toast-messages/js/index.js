console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  newToast = document.createElement("li");
  newToast.textContent = "I am an added message";
  newToast.classList.add("toast-container__message");
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  //removes only lastChild
  // newChild = toastContainer.lastChild;
  // toastContainer.removeChild(newChild);
  toastContainer.innerHTML = "";
});
