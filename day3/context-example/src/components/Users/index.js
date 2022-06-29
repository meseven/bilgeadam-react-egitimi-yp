import React from "react";
import { useUsers } from "../../context/UserContext";
import Message from "../Message";

function Users() {
  const { users, remove } = useUsers();

  return (
    <div>
      <h2>Users</h2>
      {users &&
        users.map((user) => (
          <div key={user.id} className="list">
            <div>{user.name}</div>
            <button onClick={() => remove(user.id)}>Delete</button>
          </div>
        ))}

      {users && users.length === 0 && (
        <Message text="Henüz bir kullanıcı yok" />
      )}
    </div>
  );
}

export default Users;
