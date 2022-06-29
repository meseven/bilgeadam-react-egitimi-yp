import React from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggle } = useTheme();
  const { lang } = useLang();

  return (
    <div>
      Header
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Header;
