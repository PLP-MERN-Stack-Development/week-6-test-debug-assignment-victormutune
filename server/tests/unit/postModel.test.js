const Post = require('../../src/models/Post');

describe('Post model', () => {
  it('should require title and content', () => {
    const post = new Post();
    const error = post.validateSync();
    expect(error.errors.title).toBeDefined();
    expect(error.errors.content).toBeDefined();
  });

  it('should set createdAt by default', () => {
    const post = new Post({ title: 'Test', content: 'Test content' });
    expect(post.createdAt).toBeDefined();
  });
});
