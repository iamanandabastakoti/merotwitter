import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const {userkey} = useParams();

  return (
    <>
    {console.log(userkey)}
    </>
  )
}

export default UserProfile