import React from 'react'

const UserTweet = () => {
    return (
        <div className="user-tweet">
            <div className="tweetArea">
                <div className="userPic">
                    <img src="https://pbs.twimg.com/profile_images/1621753053748789248/0rSidPnE_400x400.jpg" alt="User Profile Picture" />
                </div>
                <div className="tweet-text">
                <textarea className='tweet-textarea' id="tweet" name="tweet" placeholder="What is happening?!" ></textarea>
                </div>
            </div>
            <div className="home-tweet-button">
            <button className="tweetButton">Tweet</button>
            </div>
        </div>
    )
}

export default UserTweet