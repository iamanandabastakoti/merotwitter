import React, { useEffect, useState } from 'react'
import HomeTitle from '../components/home/HomeTitle'
import UserTweet from '../components/home/UserTweet'
import Tweet from '../components/home/Tweet'
import axios from 'axios'
import { Triangle } from 'react-loader-spinner'

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
      headers: {
        apiKey: `${import.meta.env.VITE_API_KEY}`
      }
    });
    setUsers(posts.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);

  return (
    <div className="home">
      <HomeTitle />
      <UserTweet setShouldRefresh={setShouldRefresh} />
      {isLoading ? 
      <div className="loading-triangle">
        <Triangle
          height="80"
          width="80"
          color="#1d9bf0"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          /> 
      </div>
      : null
      }
      {users.map(({ user, content, image, _id }) => {
        return <Tweet avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} name={user.fullname} username={'@' + user.name} tweet={content} image={image} userkey={user._id} id={_id} />
      })}
    </div>
  )
}

export default Home