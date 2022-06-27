import React from "react";
import PropTypes from "prop-types";

function Users({ title, isVisibleList, data, user }) {
  return (
    <div>
      <h2>{title}</h2>

      {isVisibleList &&
        data.map((user) => <div key={user.id}>{user.name}</div>)}

      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

Users.propTypes = {
  title: PropTypes.string.isRequired,
  isVisibleList: PropTypes.bool,
  data: PropTypes.array,
  user: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Users.defaultProps = {
  title: "Users",
};

export default Users;
