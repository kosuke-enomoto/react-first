import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentSyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentSyle}>{children}</p>;
};
