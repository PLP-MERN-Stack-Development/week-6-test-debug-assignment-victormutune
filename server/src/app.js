const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use(errorHandler);

module.exports = app;
