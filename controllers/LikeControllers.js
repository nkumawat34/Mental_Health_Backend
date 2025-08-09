const MentalHealthStory = require('../Models/StoriesModel');

// Add a like to a mental health story
const addLike = async (req, res) => {
  const { storyId } = req.params;
  const { author } = req.body; // Assuming author is provided in the request body

  try {
    const story = await MentalHealthStory.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Check if author is already in the likes array
    if (story.likes.includes(author)) {

        res.send("Already User Liked")
 
        return ;
    }

    // Add author to the likes array
    story.likes.push(author);
    await story.save();

    res.json({ message: 'Like added successfully', story });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a like from a mental health story
const deleteLike = async (req, res) => {
  const { storyId, userId } = req.params;

  try {
    const story = await MentalHealthStory.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Check if the userId exists in the likes array
    const likeIndex = story.likes.indexOf(userId);
    if (likeIndex === -1) {
      return res.status(404).json({ error: 'User has not liked the story' });
    }

    // Remove the userId from the likes array
    story.likes.splice(likeIndex, 1);
    await story.save();

    res.json({ message: 'Like deleted successfully', story });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addLike, deleteLike };
