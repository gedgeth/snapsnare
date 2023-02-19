const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
