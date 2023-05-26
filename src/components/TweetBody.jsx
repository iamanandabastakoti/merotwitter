import React from 'react'
import { useNavigate } from 'react-router-dom'

const TweetBody = ({ tweet, image, id }) => {

  const navigate = useNavigate();
  const navigateToTweet = () => {
    navigate(`/tweet/${id}`);
  }

  return (
    <div onClick={navigateToTweet} className='tweet-body'>
      <p className="tweet-text">{tweet}</p>
      <img
        className="tweet-image"
        src={image}
        alt="Tweet Image"
      />
    </div>
  )
}

export default TweetBody