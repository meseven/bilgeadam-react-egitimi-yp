import React from "react";
import useStore from "../store/useStore";

function ChangeTitleWithZustand() {
  const title = useStore((state) => state.title);
  const changeTitle = useStore((state) => state.changeTitle);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => changeTitle("Diğer Başlık")}>Change Title</button>
    </div>
  );
}

export default ChangeTitleWithZustand;
