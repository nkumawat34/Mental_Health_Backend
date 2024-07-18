const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors=require('cors')
// Initialize Express app
const app = express();
app.use(cors())
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/stories', require('./routes/mentalHealthStoryRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/likes', require('./routes/likeRoutes'));
app.use('/api/contact',require('./routes/contactRoutes'))

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
