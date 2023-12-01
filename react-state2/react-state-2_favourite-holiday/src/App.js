import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [holiday, setHoliday] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let inputDate = event.target.elements.date.value;
    let inputHoliday = event.target.elements.holiday.value;
    console.log("events", event);
    console.log("targets", event.target);
    console.log("elements", event.target.elements);
    console.log("is array?", Array.isArray(event.target.elements));
    setDate(inputDate);
    setHoliday(inputHoliday);
  }
  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button" name="button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
