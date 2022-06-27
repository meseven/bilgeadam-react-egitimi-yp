import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({
    id: 1,
    name: "Ahmet",
    age: 30,
  });

  const handleClick = () => {
    setUser((prev) => ({
      ...prev,
      age: 40,
    }));
  };

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default User;
