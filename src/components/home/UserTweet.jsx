import React from 'react'

const UserTweet = () => {
    return (
        <div className="user-tweet">
            <div className="tweetArea">
                <div className="userPic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="User Profile Picture" />
                </div>
                <div className="write-tweet-text">
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