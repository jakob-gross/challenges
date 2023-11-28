import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      colorB="red"
      colorN="blue"
      disabled
      text="hallo hallo"
      onClick={() => console.log("click")}
    />
  );
}

function Button({ colorB, colorN, disabled, text, onClick }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      // disabled  ? "disabled" : null
      style={{ backgroundColor: colorB, color: colorN }}
    >
      {text}
    </button>
  );
}
