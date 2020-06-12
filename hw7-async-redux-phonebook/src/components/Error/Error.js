import React from "react";
const Error = ({ error }) => (
  <div>
    <p>{error.message}</p>
    <p>{error.name}</p>
    <p>{error.stack}</p>
  </div>
);

export default Error;
