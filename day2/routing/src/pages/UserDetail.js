import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  console.log(location);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + id).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  const nextUserId = Number(id) + 1;

  const nextUser = () => {
    navigate("/users/" + nextUserId);
  };

  return (
    <div>
      <h2>User Detail</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <br />

      <button onClick={nextUser}>Next User ({nextUserId})</button>
    </div>
  );
}

export default UserDetail;
