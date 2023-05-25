import React from 'react'
import {BiSearch} from 'react-icons/bi'
import Trending from './Trending'

const Trends = () => {

  const trends = [
    {
      trendTitle: 'Entertainment - Trending',
      trendingContent: 'Shah Rukh Khan',
      totalTweets: '200K Tweets'
    },
    {
      trendTitle: 'Entertainment - Trending',
      trendingContent: 'JAWAN',
      totalTweets: '184K Tweets'
    },
    {
      trendTitle: 'Entertainment - Trending',
      trendingContent: '#SRK🐐',
      totalTweets: '190K Tweets'
    },
    {
      trendTitle: 'Sports - Trending',
      trendingContent: '#ViratKohli🐐',
      totalTweets: '100K Tweets'
    },

  ]

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
            {trends.map(({trendTitle, trendingContent, totalTweets}) => {
              return(
                <Trending trendTitle={trendTitle} trendingContent={trendingContent} totalTweets={totalTweets} />
              )
            })}
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