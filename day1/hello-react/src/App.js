import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
// import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Header />

      <Users
        isVisibleList={true}
        data={[
          { id: 1, name: "Ahmet" },
          { id: 2, name: "Ayşe" },
          { id: 3, name: "Hande" },
        ]}
        user={{
          id: 4,
          name: "Mehmet",
        }}
      />
      {/* <Paragraph
        text="Paragraf 1"
        number={10}
        data={{ key: "value" }}
        list={[1, 2, 3]}
      /> */}
    </div>
  );
}

export default App;
