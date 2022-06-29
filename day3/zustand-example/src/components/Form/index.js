import React, { useState } from "react";
import useStore from "../../store/useStore";

function Form() {
  const add = useStore((state) => state.add);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) {
      return false;
    }

    add({ name });
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
