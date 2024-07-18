// contactController.js

const Contact = require('../Models/ContactModel'); // Assuming your Mongoose model is defined in ./models/contact.js

// Controller function to handle POST request for creating a new contact message
exports.createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new Contact document
        const newContact = new Contact({
            name,
            email,
            message
        });

        // Save the Contact document to MongoDB
        await newContact.save();

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Failed to send message' });
    }
};
