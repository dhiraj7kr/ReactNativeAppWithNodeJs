const express = require('express');
const app = express();
const port = 5000;  // You can use any port you like

app.use(express.json()); // Middleware to parse JSON request body

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
