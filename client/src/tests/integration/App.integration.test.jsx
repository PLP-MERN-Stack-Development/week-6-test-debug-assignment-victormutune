import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import PostList from '../../components/PostList';

describe('App integration', () => {
  it('should add a post and display it in the list', () => {
    // Simulate a simple app structure
    function MockApp() {
      const [posts, setPosts] = React.useState([]);
      const [title, setTitle] = React.useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts, { _id: Date.now().toString(), title }]);
        setTitle('');
      };
      return (
        <>
          <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <Button type="submit">Add</Button>
          </Form>
          <PostList posts={posts} />
        </>
      );
    }
    render(<MockApp />);
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Integration Post' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Integration Post')).toBeInTheDocument();
  });
});
