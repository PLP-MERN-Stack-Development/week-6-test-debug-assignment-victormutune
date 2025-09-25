import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from '../../components/PostList';

describe('PostList component', () => {
  it('renders posts', () => {
    const posts = [
      { _id: '1', title: 'Post 1' },
      { _id: '2', title: 'Post 2' }
    ];
    render(<PostList posts={posts} />);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  it('renders no posts message', () => {
    render(<PostList posts={[]} />);
    expect(screen.getByText('No posts available')).toBeInTheDocument();
  });
});
