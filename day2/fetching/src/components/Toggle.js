import React from "react";
import useToggle from "../hooks/useToggle";

function Toggle() {
  const { status, toggle } = useToggle(true);

  return (
    <div>
      {status && <h1>Test</h1>}

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Toggle;
