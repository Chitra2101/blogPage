import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Post 1',
      excerpt: 'This is the excerpt for post 1.',
      date: 'July 10, 2023',
      comments: 5,
      tags: ['tag1', 'tag2', 'tag3'],
    },
    // Rest of the posts...
  ];

  return (
    <div className="home">
      <h1>Welcome to My Blog!</h1>
      <p className="home-description">
        This is my blog page
     </p>
      <div className="posts-container">
        <h2>Recent Posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-info">
                <p className="post-date">Posted on {post.date}</p>
                <div className="post-meta">
                  <p className="post-comment-count">{post.comments} Comments</p>
                  <ul className="post-tags">
                    {post.tags.map((tag, index) => (
                      <li key={index} className="tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link to={`/posts/${post.id}`} className="read-more-link">
                Read More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
