import React from 'react';
import './component.css';

const Comments = () => {
  const comments = [
    { id: 1, author: 'John', comment: 'Great post!' },
    { id: 2, author: 'Jane', comment: 'I learned a lot from this article.' },
    { id: 3, author: 'Mike', comment: 'Thank you for sharing!' },
  ];

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
