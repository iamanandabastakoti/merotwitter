import React from 'react'
import {BiSearch} from 'react-icons/bi'
import Trending from './Trending'

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends-left">
        <div className="search-bar">
          <BiSearch className='trends-search-icon' />
          <input type="text" placeholder='Search Twitter' />
        </div>

        <div className="trend-list">
          <div className="trends-for-you">
            <h3>Trends for you</h3>
          </div>
          <div className="trending">
            <Trending />
            <Trending />
          </div>
          <div className="show-more">
            Show More
        </div>
        </div>
        
      </div>
      <div className="trends-right"></div>
    </div>
  )
}

export default Trends