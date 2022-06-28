import { useState } from "react";

function useToggle(isActive) {
  const [status, setStatus] = useState(isActive);

  const toggle = () => setStatus((prev) => !prev);

  return {
    status,
    toggle,
  };
}

export default useToggle;
