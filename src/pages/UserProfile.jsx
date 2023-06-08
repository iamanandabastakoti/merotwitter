import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Tweet from '../components/home/Tweet'
import { BiArrowBack } from "react-icons/bi";
import axios from 'axios';

const UserProfile = () => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }

  const { userkey } = useParams();
  const [users, setUsers] = useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get('https://react-workshop-todo.fly.dev/posts/profile/' + userkey , {
      headers: {
        apiKey: `${import.meta.env.VITE_API_KEY}`
      }
    });
    setUsers(posts.data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <div className="user-profile">
        <div className="user-profile-header">
          <div onClick={navigateToHome} className="user-profile-header-icon">
            <BiArrowBack />
          </div>
          <div className="user-profile-title">
            Ananda Bastakoti
          </div>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-picture">
            <img src="https://avatars.githubusercontent.com/u/105543272?v=4" alt="Profile Picture" />
          </div>
          <div className="user-name-info">
            <h3>Ananda Bastakoti</h3>
            <span>@iamanandabastakoti</span>
          </div>
        </div>
        <div className="user-all-tweets">
          {users.map(({ user, content, image, _id }) => {
            return <Tweet avatar={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} name={user.fullname} username={'@' + user.name} tweet={content} image={image} userkey={user._id} id={_id} />
          })}
        </div>
      </div>
    </>
  )
}

export default UserProfile