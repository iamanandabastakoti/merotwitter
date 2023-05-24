import axios from 'axios';
import React, { useState } from 'react'

const UserTweet = ({ setShouldRefresh }) => {
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

    return (
        <div className="user-tweet">
            <div className="tweetArea">
                <div className="userPic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="User Profile Picture" />
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