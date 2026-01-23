const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// For a simple portfolio, we might want to store messages from the contact form
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        mongoState: mongoose.connection.readyState, // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
        envMongoURI: !!process.env.MONGO_URI
    });
});

app.post('/api/contact', async (req, res) => {
    try {
        console.log('Headers:', req.headers);
        console.log('Body:', req.body);

        if (!req.body) {
            throw new Error('Request body is missing');
        }

        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        console.log('Contact saved successfully');
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('Error saving contact:', err);
        // Return explicit error to client
        res.status(500).json({ success: false, error: err.message, stack: err.stack });
    }
});

// Start server if run directly (Render/Local), export if imported (Vercel)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
