const express = require('express');
const { addLike, deleteLike } = require('../controllers/LikeControllers');
const router = express.Router();

// Add a like to a mental health story
router.post('/:storyId/like', addLike);

// Delete a like from a mental health story
router.delete('/:storyId/like/:userId', deleteLike);

module.exports = router;
