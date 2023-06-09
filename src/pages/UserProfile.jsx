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

  const [fullName, setFullName] = useState([]);
  const [username, setUsername] = useState([]);
  const [profilePicture, setProfilePicture] = useState([]);

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

  users.map(({ user }) => {
    fullName.push(user.fullname);
    username.push(user.name);
    profilePicture.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4');
    {document.title = `@` + `${username[0]}` + ` / Mero Twitter`}
  })

  return (
    <>
      <div className="user-profile">
        <div className="user-profile-header">
          <div onClick={navigateToHome} className="user-profile-header-icon">
            <BiArrowBack />
          </div>
          <div className="user-profile-title">
            {fullName[0]}
          </div>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-picture">
            <img src={profilePicture[0]} alt="Profile Picture" />
          </div>
          <div className="user-name-info">
            <h3>{fullName[0]}</h3>
            <span>{'@' + username[0]}</span>
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