import React from "react";
import { string, shape, number } from "prop-types";

const Comment = ({ comment }) => (
  <div style={{ marginBottom: "20px" }}>
    <strong>Id:</strong>
    {comment.id}
    <div>{comment.name}</div>
    <div>{comment.email}</div>
    <div>{comment.body}</div>
  </div>
);

Comment.propTypes = {
  comment: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    body: string.isRequired,
  }).isRequired,
};

export default Comment;
