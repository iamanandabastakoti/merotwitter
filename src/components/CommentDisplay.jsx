import React from 'react'
import Header from './Header'
import CommentFooter from './CommentFooter'

const CommentDisplay = ({avatar, name, username, comment}) => {
  return (
    <div className="all-comments">
      <img
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="comment-contents">
        <Header name={name} username={ '@' + username} />
        <div className="comment"> {comment} </div>
        <CommentFooter />
        </div>
    </div>
  )
}

export default CommentDisplay