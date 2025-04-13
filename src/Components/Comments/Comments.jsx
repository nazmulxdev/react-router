import React, { use } from "react";

const Comments = ({ commentApi }) => {
  const commentData = use(commentApi);
  console.log(commentData);
  return <div></div>;
};

export default Comments;
