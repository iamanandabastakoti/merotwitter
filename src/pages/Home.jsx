import React from 'react'
import HomeTitle from '../components/home/HomeTitle'
import UserTweet from '../components/home/UserTweet'

const Home = () => {
  return (
    <div className="home">
      <HomeTitle />
      <UserTweet />
    </div>
  )
}

export default Home