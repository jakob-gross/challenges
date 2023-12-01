import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button />
      <Button>hallo</Button>
      <Button>hallo, hallo</Button>
      <Button>haaaaaalllooooo</Button>
      <Button>tschüss!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
