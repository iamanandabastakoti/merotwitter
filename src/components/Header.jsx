import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Header = ({ name, username, userkey }) => {

  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/profile/${userkey}`)
  }

  return (
    <div className="tweet-header">
      <div onClick={navigateToProfile} className="header-user-info">
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