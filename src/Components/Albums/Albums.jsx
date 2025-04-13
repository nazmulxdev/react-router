import React from "react";
import { useParams } from "react-router";

const Albums = () => {
  const albumData = useParams();
  console.log(albumData);
  return <div></div>;
};

export default Albums;
