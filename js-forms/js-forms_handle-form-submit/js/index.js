console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //the complicated way
  let formElements = e.target.elements;
  let fName = formElements.firstName.value;
  let lName = formElements.lastName.value;
  let age = formElements.age.value;
  let email = formElements.email.value;
  let complaint = formElements.complaint.value;
  let details = formElements.details.value;
  let badness = formElements.badness.value;
  let orderdate = formElements.orderDate.value;
  let tos = formElements.tos.value;
  let object = {};
  console.log(
    fName,
    lName,
    age,
    email,
    complaint,
    details,
    badness,
    orderdate,
    tos
  );
  // the correct way
  const theShortWayFormData = new FormData(e.target);
  const allData = Object.fromEntries(theShortWayFormData);
  console.log(allData);

  console.log(
    `The age-badness-sum of ${allData.firstName} is ${allData.badness}`
  );
  // reset and focus
  e.target.reset();
  formElements.firstName.focus();
});
