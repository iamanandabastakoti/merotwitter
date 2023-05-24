import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const Header = ({ name, username }) => {
  return (
    <div className="tweet-header">
      <div className="header-user-info">
      <h3 className="user-name">{name}</h3>
      <span className="user-handle">{username}</span>
      </div>
      <div className="header-more">
        <FiMoreHorizontal />
      </div>
    </div>
  )
}

export default Header