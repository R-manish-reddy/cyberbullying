const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

// Initialize question object (simulating a database)
let question = {
  question: "Does the sun rise in the east?",
  answer: null
};

// Endpoint to get the current question
app.get('/question', (req, res) => {
  res.json(question);
});

// Endpoint to add a new question
app.post('/question', (req, res) => {
  const { newQuestion } = req.body;
  question = {
    question: newQuestion,
    answer: null
  };
  res.status(201).json({ message: 'Question posted successfully' });
});

// Endpoint to add an answer to the current question
app.post('/answer', (req, res) => {
  const { answer } = req.body;
  question.answer = answer;
  res.status(201).json({ message: 'Answer added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
