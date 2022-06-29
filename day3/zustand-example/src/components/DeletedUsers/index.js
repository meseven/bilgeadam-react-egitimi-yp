import React from "react";
import useStore from "../../store/useStore";

function DeletedUsers() {
  const deletedUsers = useStore((state) => state.deletedUsers);
  const restore = useStore((state) => state.restore);

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
