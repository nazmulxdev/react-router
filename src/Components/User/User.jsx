import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  console.log(user);
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid blue",
        borderRadius: "20px",
      }}
    >
      <h3>Name:{user.name}</h3>
      <h4>Email: {user.email}</h4>
      <Link to={`/users/${user.id}`}>Show Details</Link>
    </div>
  );
};

export default User;
