const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build'));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.header('Content-Type', 'text/javascript');
  next();
});


app.get('/index.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'client', 'build', 'static', 'js', 'index.js'));
});

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
