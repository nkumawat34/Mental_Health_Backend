const express = require('express');
const {
  addComment,
  deleteComment,
  getAllComments
} = require('../controllers/CommenContollers');
const authenticate=require('../middleware/authenticate')
const router = express.Router();

// Add a comment to a mental health story
router.post('/story/:id/comments',authenticate, addComment);

// Delete a comment from a mental health story
router.delete('/:storyId/comments/:commentId',authenticate, deleteComment);

// Get all comments of a mental health story
router.get('/:storyId/comments', getAllComments);

module.exports = router;
