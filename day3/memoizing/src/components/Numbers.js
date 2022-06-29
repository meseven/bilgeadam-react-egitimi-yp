import React from "react";

function Numbers({ numbers }) {
  console.log("Numbers component re-render");

  return (
    <div>
      <h2>Random Numbers</h2>
      {numbers.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
    </div>
  );
}

export default React.memo(Numbers);
