import React, { useEffect, useState } from "react";

function FetchingFC() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      console.log("FetchingFC Unmounted");
    };
  }, []);

  const handleAdd = () => {
    setUsers((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 1000), name: input },
    ]);
  };

  return (
    <div>
      <h2>Functional Component</h2>

      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <br />

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default FetchingFC;
