import React from "react";

function Header({ increase }) {
  console.log("Header component re-render");

  return (
    <div>
      header <br />
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default React.memo(Header);
