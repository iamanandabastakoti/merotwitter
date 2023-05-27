import React from 'react'

const CommentBox = ({ id }) => {
    return (
        <div className="comment-box">
            <div className="add-comment">
                <div className="comment-area">
                    <div className="comment-userPic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" alt="User Profile Picture" />
                    </div>
                    <textarea className='comment-textarea' name="comment" id="comment" placeholder='Tweet your reply!' ></textarea>
                </div>
                <div className="comment-button">
                <button className="commentButton">Comment</button>
                </div>
            </div>
        </div>
    )
}

export default CommentBox