import React, { useState } from 'react';

function TweetForm() {
  const [tweets, setTweets] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/tweets');
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Get Tweets</button>
      </form>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <p>{tweet.text}</p>
            <p>Username: {tweet.user.screen_name}</p>
            {tweet.entities.media && (
              <img src={tweet.entities.media[0].media_url} alt="Tweet media" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetForm;
