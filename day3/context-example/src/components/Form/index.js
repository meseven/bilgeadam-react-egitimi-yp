import React, { useState } from "react";
import { useUsers } from "../../context/UserContext";

function Form() {
  const { addUser } = useUsers();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) {
      return false;
    }

    addUser({ name, email: "test@test.com" });
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Form;
