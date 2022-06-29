import React from "react";

function User({ data }) {
  console.log("User component re-render");
  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default React.memo(User);
