import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const Header = () => {
  return (
    <div className="tweet-header">
      <div className="header-user-info">
      <h3 className="user-name">Ananda Bastakoti</h3>
      <span className="user-handle">@iamanandabastaktoi</span>
      </div>
      <div className="header-more">
        <FiMoreHorizontal />
      </div>
    </div>
  )
}

export default Header