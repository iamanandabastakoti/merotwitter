import React from 'react'

const TweetBody = ({ tweet, image, id }) => {

  

  return (
    <div className='tweet-body'>
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