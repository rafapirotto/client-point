import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Comment from "../Comment";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPost = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const fetchedPost = result.data;
    setPost(fetchedPost);
  };
  const fetchComments = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/comments");
    const filteredComments = result.data.filter((comment) => comment.postId === +id);
    setComments(filteredComments);
  };

  const fetchData = async () => {
    await fetchPost();
    await fetchComments();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!post) return <strong>Loading...</strong>;

  const renderComments = () => {
    if (comments.length === 0) return <strong>Loading comments...</strong>;

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <strong>Comments:</strong>
        </div>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </>
    );
  };

  return (
    <>
      <div>
        <strong>Title:</strong> {post.title}
      </div>
      <div>
        <strong>Body:</strong> {post.body}
      </div>
      <div style={{ marginTop: "20px" }}>{renderComments()}</div>
    </>
  );
};

export default Post;
