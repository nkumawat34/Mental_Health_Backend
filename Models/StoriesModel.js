// models/mentalHealthStory.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the MentalHealthStory Schema
const mentalHealthStorySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{
    
    text: { type: String, required: true },
    commenter: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }],
  likes: [{ type: String}] // Assuming likes are associated with users
});


// Create a model based on the schema
const MentalHealthStory = mongoose.model('MentalHealthStory', mentalHealthStorySchema);

module.exports = MentalHealthStory;
