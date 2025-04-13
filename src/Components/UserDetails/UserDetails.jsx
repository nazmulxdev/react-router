import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userDetails = useLoaderData();

  const navigateData = useNavigate();
  const handledNavigate = () => {
    navigateData(-1);
  };
  console.log(userDetails);
  return (
    <div style={{ textAlign: "start", margin: "0 auto" }}>
      <h3>User Details Here</h3>
      <h4>Name : {userDetails.name}</h4>
      <h4>Name : {userDetails.username}</h4>
      <h4>Name : {userDetails.email}</h4>
      <h4>Name : {userDetails.website}</h4>
      <h4>Name : {userDetails.phone}</h4>
      <button onClick={handledNavigate}>GO Back</button>
    </div>
  );
};

export default UserDetails;
