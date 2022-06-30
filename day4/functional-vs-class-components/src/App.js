import { useState } from "react";
import "./App.css";
import CounterCC from "./components/Counter/CounterCC";
import CounterFC from "./components/Counter/CounterFC";
import FetchingCC from "./components/Fetching/FetchingCC";
import FetchingFC from "./components/Fetching/FetchingFC";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* <CounterFC start={5} />
      <hr />
      <CounterCC start={5} /> */}

      {isVisible && (
        <>
          <FetchingFC />
          <hr />
          <FetchingCC />
        </>
      )}

      <br />
      <hr />
      <button onClick={() => setIsVisible((prev) => !prev)}>Toggle</button>
    </div>
  );
}

export default App;
