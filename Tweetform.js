import React, { useState } from 'react';

function TweetForm() {
  const [tweetURL, setTweetURL] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API call with the tweetURL and update the state with the image URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tweet URL:
        <input type="text" value={tweetURL} onChange={(event) => setTweetURL(event.target.value)} />
      </label>
      <button type="submit">Generate Image</button>
    </form>
  );
}

export default TweetForm;