import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <label htmlFor="username">Kullanıcı Adı</label>
      <input id="username" type="text" />
    </div>
  );
}

export default App;
