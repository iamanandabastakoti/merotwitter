import React from 'react'
import { useParams } from 'react-router-dom'
import Tweet from '../components/home/Tweet'

const UserProfile = () => {

    const {userkey} = useParams();

  return (
    <>
    <div className="user-profile">
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
        <Tweet avatar='https://avatars.githubusercontent.com/u/105543272?v=4' name='Ananda Bastakoti' username='@iamanandabastakoti' tweet='My Profile' image='https://avatars.githubusercontent.com/u/105543272?v=4' />
      </div>
    </div>
    </>
  )
}

export default UserProfile