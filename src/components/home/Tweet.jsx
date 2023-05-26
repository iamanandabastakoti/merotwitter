import React from 'react'
import Header from '../Header'
import TweetBody from '../TweetBody'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Tweet = ({ avatar, name, username, tweet, image, id }) => {

  const navigate = useNavigate();
  const navigateToTweet = () => {
    navigate(`/tweet/${id}`);
  }

  return (
    <div onClick={navigateToTweet} className="tweet">
        <img
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header name={name} username={username} />
            <TweetBody tweet={tweet} image={image} id={id} />
            <Footer />
        </div>
    </div>
  )
}

export default Tweet