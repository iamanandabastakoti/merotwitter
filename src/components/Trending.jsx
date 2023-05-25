import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'

const Trending = () => {
  return (
    <>
    <div className="trending-card">
        <div className="trend-details">
            <div className="trending-title">Entertainment - Trending</div>
            <div className="trending-content">Shah Rukh Khan</div>
            <div className="total-trend-tweets">200k Tweets</div>
        </div>
        <div className="trend-more-option">
            <FiMoreHorizontal />
        </div>
    </div>
    </>
  )
}

export default Trending