import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserTweet = ({ setShouldRefresh, profilePicture, userKey }) => {
    let [tweetContent, setTweetContent] = useState("");

    const upload = async () => {
        try{
            await axios.post("https://react-workshop-todo.fly.dev/posts", {
                content: tweetContent,
                image: "https://media.kulfyapp.com/0UY5UD/0UY5UD-360.gif",
            }, {
                headers: {
                    apiKey: `${import.meta.env.VITE_API_KEY}`
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        } catch{
            alert("Error Uploading Tweet!");
        }
    }

    const handleSubmit = () => {
        upload();
    }

    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`/profile/${userKey}`)
    }

    return (
        <div className="user-tweet">
            <div className="tweetArea">
                <div onClick={navigateToProfile} className="userPic">
                    <img src={profilePicture} alt="User Profile Picture" />
                </div>
                <div className="write-tweet-text">
                <textarea className='tweet-textarea' id="tweet" name="tweet" placeholder="What is happening?!" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} ></textarea>
                </div>
            </div>
            <div className="home-tweet-button">
            <button className="tweetButton" onClick={handleSubmit}>Tweet</button>
            </div>
        </div>
    )
}

export default UserTweet