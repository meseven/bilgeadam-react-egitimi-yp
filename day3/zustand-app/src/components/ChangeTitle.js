import React from "react";
import { useCounter } from "../context/CounterContext";

function ChangeTitle() {
  const { title, setTitle } = useCounter();

  console.log("ChangeTitle Component re-render");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Diğer Başlık")}>Change Title</button>
    </div>
  );
}

export default ChangeTitle;
