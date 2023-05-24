import React, { useEffect, useState } from 'react'
import HomeTitle from '../components/home/HomeTitle'
import UserTweet from '../components/home/UserTweet'
import Tweet from '../components/home/Tweet'
import axios from 'axios'

const Home = () => {

  const [users, setUsers] =useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100",{
      headers: {
        apiKey: `${import.meta.env.VITE_API_KEY}`
      }
    });
    setUsers(posts.data)
  };

  useEffect(()=>{
    fetchTweets();
  }, []);

  return (
    <div className="home">
      <HomeTitle />
      <UserTweet />
      {users.map(({user, content, image, _id}) => {
        return <Tweet avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} name={user.fullname} username={'@' + user.name} tweet={content} image={image} key={user.id} id={_id} />
      })}
    </div>
  )
}

export default Home