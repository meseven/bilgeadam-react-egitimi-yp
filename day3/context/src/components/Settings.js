import React from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div>
      <h2>Settings</h2>
      <div>
        Active Theme: {theme} <button onClick={toggle}>Toggle</button>
      </div>

      <div style={{ marginTop: 10 }}>
        Active Language: {lang}
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="tr-TR">tr-TR</option>
          <option value="en-US">en-US</option>
          <option value="de-DE">de-DE</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
