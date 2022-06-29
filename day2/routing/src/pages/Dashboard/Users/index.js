import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <div className="user-list">
        {users.map((user) => (
          <Link to={`${user.id}`} key={user.id} state={{ user }}>
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;
