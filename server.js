const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Twit = require('twit');

const app = express();
const port = process.env.PORT || 5000;

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the MIME type for index.js
app.use((req, res, next) => {
  if (req.url.endsWith('/index.js')) {
    res.set('Content-Type', 'text/javascript');
  }
  next();
});

// Serve the index.js file
app.get('/static/js/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'static/js/index.js'));
});

// Endpoint for posting a tweet
app.post('/api/tweet', (req, res) => {
  const tweet = req.body.tweet;
  // Use the Twit library to post the tweet
  T.post('statuses/update', { status: tweet }, function(err, data, response) {
    if (err) {
      console.error(err);
      res.status(500).send('Error posting tweet');
    } else {
      console.log('Tweet posted successfully');
      res.send('Tweet posted successfully');
    }
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
