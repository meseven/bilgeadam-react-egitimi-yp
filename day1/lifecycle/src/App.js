import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter />}

      <br />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Gizle" : "Göster"}
      </button>
    </div>
  );
}

export default App;
