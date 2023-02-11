const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

res.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
