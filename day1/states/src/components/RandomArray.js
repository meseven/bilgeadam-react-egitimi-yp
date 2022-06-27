import React, { useState } from "react";

function RandomArray({ count, setCount }) {
  const [maxNumber, setMaxNumber] = useState(100);

  const arr = new Array(count)
    .fill()
    .map(() => Math.floor(Math.random() * maxNumber));

  return (
    <div>
      <h2>Length: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Arttır</button>

      <h2>Max Length: {maxNumber}</h2>
      <button onClick={() => setMaxNumber(20)}>20</button>
      <button onClick={() => setMaxNumber(100)}>100</button>
      <button onClick={() => setMaxNumber(1000)}>1000</button>
      <pre>{JSON.stringify(arr, null, 2)}</pre>
    </div>
  );
}

export default RandomArray;
