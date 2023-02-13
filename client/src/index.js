import React from 'react';
import ReactDOM from 'react-dom';
import TweetForm from './TweetForm';

app.get('/index.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, 'client/build/static/js', 'main.52c91760.js'));
  });
  

ReactDOM.render(<TweetForm />, document.getElementById('root'));
