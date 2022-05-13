import React from "react";
import { arrayOf } from "prop-types";

const Posts = ({ posts }) => {
  if (posts.length === 0) return <strong>Loading...</strong>;

  return (
    <>
      {posts.map((post) => (
        <div style={{ marginTop: "20px" }} key={post.id}>
          <a href={`/${post.id}`}>{post.title} </a>
        </div>
      ))}
    </>
  );
};

Posts.propTypes = {
  posts: arrayOf(Object).isRequired,
};

export default Posts;
