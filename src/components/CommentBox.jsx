import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CommentDisplay from './CommentDisplay'

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

    // fetching comment data from API
    const [comments, getComments] = useState([]);
    const fetchComments = async () => {
        try{
            const comments = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`, {
                headers: {
                    apiKey: `${import.meta.env.VITE_API_KEY}`
                }
            });
            getComments((comments.data.post.comments));
        } catch(error) {
            alert("Error fetching commenst!");
        }
    };
    
    useEffect(() => {
        fetchComments();
    }, []);

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
            {comments.map((data) => (
                <CommentDisplay avatar={'https://avatars.githubusercontent.com/u/' + data.user.githubId + '?v=4'} name={data.user.fullname} username={data.user.name} comment={data.content} />
            ))}
        </div>
    )
}

export default CommentBox