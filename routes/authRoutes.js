const express = require('express');
const { registerUser, loginUser,getUsers } = require('../controllers/UserControllers');
const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

router.get("/getusers",getUsers)

module.exports = router;
