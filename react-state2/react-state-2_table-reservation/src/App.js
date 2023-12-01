import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleIncrementPeople() {
    setPeople(people + 1);
  }
  function handleDecrementPeople() {
    setPeople(Math.max(0, people - 1));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        // onPeople={people}
        onIncrementPeople={handleIncrementPeople}
        onDecrementPeople={handleDecrementPeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
