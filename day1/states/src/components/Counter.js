import React, { useState } from "react";

function Counter({ count, setCount }) {
  const [amount, setAmount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count - amount);
        }}
      >
        Azalt
      </button>

      <button onClick={increase}>Arttır</button>

      <hr />
      <h1>Amount: {amount}</h1>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;
