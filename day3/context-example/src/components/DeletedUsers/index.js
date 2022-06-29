import React from "react";
import { useUsers } from "../../context/UserContext";

function DeletedUsers() {
  const { deletedUsers, restore } = useUsers();

  return (
    <div>
      <hr />
      <h2>Deleted Users</h2>
      {deletedUsers.map((user) => (
        <div key={user.id} className="list">
          <div>{user.name}</div>
          <button onClick={() => restore(user.id)}>Restore</button>
        </div>
      ))}
    </div>
  );
}

export default DeletedUsers;
