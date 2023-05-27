import axios from 'axios';
import React, { useState } from 'react'

const CommentBox = ({ id }) => {

    const [comment, setComment] = useState('');
    const handleComment = () => {
        upload();
    }

    // uploading comment data in API
    const upload = async () => {
        try{
            await axios.post(`https://react-workshop-todo.fly.dev/posts/${id}/comments`, {
                content: comment,
            }, {
                headers: {
                    apiKey: `${import.meta.env.VITE_API_KEY}`
                },
            });
            setComment("");
        } catch(error) {
            alert('Error commenting!');
        }
    }

    return (
        <div className="comment-box">
            <div className="add-comment">
                <div className="comment-area">
                    <div className="comment-userPic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="User Profile Picture" />
                    </div>
                    <textarea className='comment-textarea' name="comment" id="comment" placeholder='Tweet your reply!' required value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                </div>
                <div className="comment-button">
                <button onClick={handleComment} className="commentButton">Comment</button>
                </div>
            </div>
        </div>
    )
}

export default CommentBox