const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const postRoutes = require('../../src/routes/postRoutes');
const Post = require('../../src/models/Post');

let app, mongoServer;

describe('Post API integration', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
    app = express();
    app.use(express.json());
    app.use('/api/posts', postRoutes);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Post.deleteMany();
  });

  it('should create a post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'Test', content: 'Test content' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test');
  });

  it('should get all posts', async () => {
    await Post.create({ title: 'Test', content: 'Test content' });
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
