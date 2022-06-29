import "./App.css";
import ChangeTitle from "./components/ChangeTitle";
import ChangeTitleWithZustand from "./components/ChangeTitleWithZustand";
import Counter from "./components/Counter";
import CounterWithZustand from "./components/CounterWithZustand";
import { CounterContextProvider } from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Counter />
        <hr />
        <ChangeTitle />
      </CounterContextProvider>

      <CounterWithZustand />
      <hr />
      <ChangeTitleWithZustand />
    </div>
  );
}

export default App;
