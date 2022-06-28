import React from "react";
import PropTypes from "prop-types";

function Loading({ text }) {
  return <div>{text}</div>;
}

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: "Loading...",
};

export default Loading;
