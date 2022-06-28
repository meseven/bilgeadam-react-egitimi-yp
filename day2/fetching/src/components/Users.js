import React, { useState } from "react";
import config from "../config";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Loading from "./Loading";
import Posts from "./Posts";

function Users() {
  const [endpoint, setEndpoint] = useState(config.API_BASE_URL + "/users");
  const { data, loading, error } = useHttp(endpoint);

  return (
    <div>
      <h2>Users</h2>

      <button
        onClick={() =>
          setEndpoint(
            "https://mocki.io/v1/8b258e19-e6a8-473c-9086-eb8637c357d9"
          )
        }
      >
        Refetch
      </button>

      {loading && <Loading text="Yükleniyor..." />}
      {error && <Error message={error.message} />}

      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      {data.length > 0 && <Posts userId={data[0]?.id} />}
    </div>
  );
}

export default Users;
