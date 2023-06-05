import React from 'react'
import Header from '../Header'
import TweetBody from '../TweetBody'
import Footer from '../Footer'

const Tweet = ({ avatar, name, username, tweet, image, id, userkey }) => {

  return (
    <div className="tweet">
        <img
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header name={name} username={username} userkey={userkey} />
            <TweetBody tweet={tweet} image={image} id={id} />
            <Footer id={id} />
        </div>
    </div>
  )
}

export default Tweet