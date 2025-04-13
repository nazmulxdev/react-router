import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const userData = useLoaderData();
  //   console.log(userData);
  return (
    <div>
      <h2>This is users data</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3,1fr)`,
          gap: "12px",
        }}
      >
        {userData.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
