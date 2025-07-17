const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve index.html at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// You can add more routes here if needed

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});