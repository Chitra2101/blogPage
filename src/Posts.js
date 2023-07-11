/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from an API
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <h1>Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <p className="post-date">Posted on {post.date}</p>
              <Link to={`/posts/${post.id}`} className="read-more-link">
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;*/
import React from 'react';

const Post = () => {
  const post = {
    id: 1,
    title: 'Sample Post',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Sed venenatis turpis sit amet nisi malesuada, et bibendum eros facilisis.</p>
      <p>Nullam sed enim ut purus semper aliquam. Fusce consectetur consequat porttitor.</p>
    `,
  };

  return (
    <div className="post">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;

