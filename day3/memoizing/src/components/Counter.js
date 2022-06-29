import React, { useCallback, useMemo, useState } from "react";
import User from "./User";
import Header from "./Header";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmet");
  const [amount, setAmount] = useState(1);

  console.log("Counter component re-render");

  const user = useMemo(() => {
    return {
      id: 1,
      name,
    };
  }, [name]);

  const increase = useCallback(() => {
    setCount((prev) => prev + amount);
  }, [amount]);

  return (
    <div>
      <Header increase={increase} />

      <hr />

      <h1>{count}</h1>
      <button onClick={increase}>Click</button>

      <br />
      <br />

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>

      <hr />

      <User data={user} />

      <button onClick={() => setName("Mehmet")}>İsmi Değiştir</button>
      <hr />
    </div>
  );
}

export default Counter;
