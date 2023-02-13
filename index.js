const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/index.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'client/build/static/js', 'main.52c91760.js'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
