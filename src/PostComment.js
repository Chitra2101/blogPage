import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Simulate fetching comments for a specific post from an API
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://api.example.com/posts/${postId}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h1>Comments for Post {postId}</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
