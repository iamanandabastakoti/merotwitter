import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends-left">
        <div className="search-bar">
          <BiSearch className='trends-search-icon' />
          <input type="text" placeholder='Search Twitter' />
        </div>
      </div>
      <div className="trends-right"></div>
    </div>
  )
}

export default Trends