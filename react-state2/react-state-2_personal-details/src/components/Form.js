import { useState } from "react";

export default function Form({ OnCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();

    let name = event.target.elements.name.value;
    let email = event.target.elements.email.value;

    OnCreateUser(name, email);
    // event.target.elements.name.value = "";
    // event.target.elements.email.value = "";
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
