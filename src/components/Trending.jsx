import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'

const Trending = ({ trendTitle, trendingContent, totalTweets }) => {
  return (
    <>
    <div className="trending-card">
        <div className="trend-details">
            <div className="trending-title">{trendTitle}</div>
            <div className="trending-content">{trendingContent}</div>
            <div className="total-trend-tweets">{totalTweets}</div>
        </div>
        <div className="trend-more-option">
            <FiMoreHorizontal />
        </div>
    </div>
    </>
  )
}

export default Trending