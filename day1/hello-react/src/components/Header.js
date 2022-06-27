import React from "react";

let name = "Mehmet";
let isLoggedIn = false;

function Header() {
  return (
    <div>
      {/* {isLoggedIn ? "Hoş geldin " + name : "Giriş yapın."} */}
      {/* {isLoggedIn ? "Hoş geldin " + name : null} */}
      {isLoggedIn && "Hoş geldin " + name}
      {!isLoggedIn && "Giriş yapın"}
      <hr />
    </div>
  );
}

export default Header;
