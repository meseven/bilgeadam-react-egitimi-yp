import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterFC({ start }) {
  const [count, setCount] = useState(start);
  const [amount, setAmount] = useState(1);

  const handleClick = function () {
    setCount(count + amount);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click</button>

      <br />

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

CounterFC.propTypes = {
  start: PropTypes.number,
};

export default CounterFC;
