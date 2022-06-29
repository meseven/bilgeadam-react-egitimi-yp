import React, { useEffect } from "react";
import useStore from "../../store/useStore";
import Message from "../Message";

function Users() {
  const users = useStore((state) => state.users);
  const loadData = useStore((state) => state.loadData);
  const remove = useStore((state) => state.remove);

  useEffect(() => {
    loadData("https://jsonplaceholder.typicode.com/users");
  }, []);

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
