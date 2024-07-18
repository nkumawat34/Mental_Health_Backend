const MentalHealthStory = require('../Models/StoriesModel');

// Get all mental health stories
const getAllStories = async (req, res) => {
  try {
    const stories = await MentalHealthStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new mental health story
const createStory = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newStory = await MentalHealthStory.create({ title, content, author });
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a specific mental health story by ID
const getStoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const story = await MentalHealthStory.findById(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a mental health story by ID
const updateStory = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedStory = await MentalHealthStory.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedStory) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json(updatedStory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a mental health story by ID
const deleteStory = async (req, res) => {
  const { id } = req.params;
console.log(id)
  try {
    const deletedStory = await MentalHealthStory.findByIdAndDelete(id);
    console.log(deletedStory)
    if (deletedStory==null) {
      return res.send("Story not found")
    }
    res.json({ message: 'Story deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllStories,
  createStory,
  getStoryById,
  updateStory,
  deleteStory
};
