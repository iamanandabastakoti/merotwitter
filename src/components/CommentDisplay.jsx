import React from 'react'
import Header from './Header'
import CommentFooter from './CommentFooter'
import { useNavigate } from 'react-router-dom'

const CommentDisplay = ({ avatar, name, username, comment, userkey }) => {

  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/profile/${userkey}`)
  }

  return (
    <div className="all-comments">
      <img
            onClick={navigateToProfile}
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="comment-contents">
        <Header name={name} username={ '@' + username} userkey={userkey} />
        <div className="comment"> {comment} </div>
        <CommentFooter />
        </div>
    </div>
  )
}

export default CommentDisplay