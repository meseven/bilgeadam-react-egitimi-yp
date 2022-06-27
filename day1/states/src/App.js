import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import RandomArray from "./components/RandomArray";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Counter count={count} setCount={setCount} /> */}
      <hr />
      {/* <User /> */}
      <Users />
      <hr />
      {/* <RandomArray count={count} setCount={setCount} /> */}
    </div>
  );
}

export default App;
