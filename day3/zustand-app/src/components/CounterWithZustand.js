import React from "react";
import useStore from "../store/useStore";

function CounterWithZustand() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  console.log("CounterWithZustand component re-render");

  return (
    <div>
      <hr />

      <h2>Zustand</h2>
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default CounterWithZustand;
