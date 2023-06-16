import React from 'react'
import { BiSearch } from "react-icons/bi";
import Trending from '../components/Trending';

const Explore = () => {

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
      trendTitle: 'Sports - Trending',
      trendingContent: '#ViratKohli🐐',
      totalTweets: '100K Tweets'
    },
    {
      trendTitle: 'Sports - Trending',
      trendingContent: '#INDvsAUS',
      totalTweets: '2,683 Tweets'
    },
  ]

  { document.title = 'Mero Twitter - Explore' }

  return (
    <div className="explore-section">
      <div className="pages-title">
        <h3>Explore</h3>
      </div>
      <div className="explore-trends">
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
              {trends.map(({ trendTitle, trendingContent, totalTweets }) => {
                return (
                  <Trending trendTitle={trendTitle} trendingContent={trendingContent} totalTweets={totalTweets} />
                )
              })}
            </div>
            <div className="show-more">
              Show More
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Explore