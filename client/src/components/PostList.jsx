import React from 'react';

const PostList = ({ posts }) => (
  <ul data-testid="post-list">
    {posts && posts.length > 0 ? (
      posts.map((post) => <li key={post._id}>{post.title}</li>)
    ) : (
      <li>No posts available</li>
    )}
  </ul>
);

export default PostList;
