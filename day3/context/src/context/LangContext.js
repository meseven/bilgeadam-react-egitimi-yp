import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("language") || navigator.language
  );

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const values = {
    lang,
    setLang,
  };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("useLang hook must be call inside LangContextProvider");
  }

  return context;
};
