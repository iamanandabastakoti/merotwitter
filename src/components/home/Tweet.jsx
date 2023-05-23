import React from 'react'
import Header from '../Header'
import TweetBody from '../TweetBody'
import Footer from '../Footer'

const Tweet = () => {
  return (
    <div className="tweet">
        <img
            className="profile-pic"
            src="https://pbs.twimg.com/profile_images/1621753053748789248/0rSidPnE_400x400.jpg"
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header />
            <TweetBody />
            <Footer />
        </div>
    </div>
  )
}

export default Tweet