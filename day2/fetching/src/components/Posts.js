import React from "react";
import config from "../config";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Loading from "./Loading";

function Posts({ userId }) {
  const { data, loading, error } = useHttp(
    config.API_BASE_URL + "/posts?userId=" + userId
  );

  return (
    <div>
      <h2>Posts</h2>

      {loading && <Loading />}
      {error && <Error message={error.message} />}

      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Posts;
