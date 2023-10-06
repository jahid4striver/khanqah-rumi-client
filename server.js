const express = require('express');
const cors= require('cors');
const path = require('path');
const app = express();

app.use(cors());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port to listen on
const port = process.env.PORT| 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
