import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Test Başlık");

  const values = {
    count,
    setCount,
    title,
    setTitle,
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("error message");
  }

  return context;
};
