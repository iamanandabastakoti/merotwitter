import React, { useEffect, useState } from 'react'
import HomeTitle from '../components/home/HomeTitle'
import UserTweet from '../components/home/UserTweet'
import Tweet from '../components/home/Tweet'
import axios from 'axios'
import { Triangle } from 'react-loader-spinner'

const Home = ({ userApi }) => {

  {document.title='Mero Twitter - Home'}

  const [isLoading, setIsLoading] = useState(true);
  const [userKey, setUserKey] = useState([]);
  const [profilePicture, setProfilePicture] = useState([]);

  const [allTweet, setAllTweet] = useState([]);
  const [users, setUsers] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
      headers: {
        apiKey: `${userApi}`
      }
    });
    setAllTweet(posts.data);
    setIsLoading(false);
  };

  const fetchUser = async () => {
    const profile = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${userApi}`, {
        headers: {
            apiKey: `${userApi}`
        }
    });
    setUsers(profile.data);
}

  useEffect(() => {
    fetchTweets();
    fetchUser();
  }, [shouldRefresh]);

  users.map(({user}) => {
    userKey.push(user._id);
    profilePicture.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4');
  })

  return (
    <div className="home">
      <HomeTitle />
      
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
      :
      <UserTweet userKey={userKey[0]} profilePicture={profilePicture[0]} setShouldRefresh={setShouldRefresh} />
    }
      {allTweet.map(({ user, content, image, _id }) => {
        return <Tweet avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} name={user.fullname} username={'@' + user.name} tweet={content} image={image} userkey={user._id} id={_id} />
      })}
    </div>
  )
}

export default Home