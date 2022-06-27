import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    console.log("component mount edildi");

    const interval = setInterval(() => {
      console.log("interval çalıştı");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("component unmount edildi");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
}

export default Counter;
