const MentalHealthStory = require('../Models/StoriesModel');

// Add a comment to a mental health story
const addComment = async (req, res) => {
  const { id } = req.params;
  const { text, commenter } = req.body;

  try {
    const story = await MentalHealthStory.findById(id);
   // if (story) {
     // return res.status(404).json({ error: 'Story not found' });
    //}

    story.comments.push({ text, commenter });
    await story.save();

    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a comment from a mental health story
const deleteComment = async (req, res) => {
  const { storyId, commentId } = req.params;
  
  try {
    const story = await MentalHealthStory.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Find the index of the comment in the comments array
    const commentIndex = story.comments.findIndex(comment => comment._id.toString() === commentId);

    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Remove the comment from the array
    story.comments.splice(commentIndex, 1);
    await story.save();

    res.json({ message: 'Comment deleted successfully', story });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all comments of a mental health story
const getAllComments = async (req, res) => {
  const { storyId } = req.params;

  try {
    const story = await MentalHealthStory.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    const comments = story.comments;
    res.json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addComment, deleteComment, getAllComments };
