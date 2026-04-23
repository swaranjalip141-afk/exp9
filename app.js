const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Cloud!</h1>
    <p>My Node.js app is now LIVE on the internet!</p>
    <p>Server Time: ${new Date().toLocaleString()}</p>
  `);
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    platform: 'Render',
    timestamp: new Date()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'ABC',
    workshopDate: 'Your Workshop Date'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});