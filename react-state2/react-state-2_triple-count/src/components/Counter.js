import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev1Count) => prev1Count + 1);
    setCount((prev1Count) => prev1Count + 1);
    setCount((prev1Count) => prev1Count + 1);
  }

  function nameOfF(laya)
  // const [previousState, setPreviousState] = useState(null);

  // const handleStateChange = (newState) => {
  //   setPreviousState(state);
  //   setState(newState);
  // };

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
