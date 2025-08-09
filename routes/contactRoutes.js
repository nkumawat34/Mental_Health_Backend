const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/ContactController'); // Assuming your controller method is defined in '../controllers/ContactController'

// Route to handle POST request for submitting contact form
router.post('/contact', createContact);
// Example: POST /contact

module.exports = router;
