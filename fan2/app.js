const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Array to store contest entries
let entries = [];

// Endpoint to handle contest entries
app.post('/enter-contest', (req, res) => {
    const participantName = req.body.name;
    const participantEmail = req.body.email;

    // Simulate a win with a 20% chance
    const isWinner = Math.random() < 0.2;

    // Save entry
    const entry = { name: participantName, email: participantEmail, isWinner };
    entries.push(entry);

    // Send response
    if (isWinner) {
        res.json({ message: 'Congratulations! You\'re a winner!', entry });
    } else {
        res.json({ message: 'Sorry, you didn\'t win this time. Try again!', entry });
    }
});

// Endpoint to get all entries (for demonstration purposes)
app.get('/get-entries', (req, res) => {
    res.json(entries);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
