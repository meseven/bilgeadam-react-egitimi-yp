import React from "react";
import { useCounter } from "../context/CounterContext";

function Counter() {
  const { count, setCount } = useCounter();

  console.log("Counter Component re-render");

  return (
    <div>
      <h2>Context API</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
}

export default Counter;
