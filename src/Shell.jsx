import React, { useState } from 'react'
import LogIn from './pages/LogIn'
import App from './App.jsx'

const Shell = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userApi, setUserApi] = useState('');

  return (
    <div className="shell">
      {!loggedIn ? <App userApi={userApi} /> : <LogIn setLoggedIn={setLoggedIn} setUserApi={setUserApi} />}

    </div>
  )
}

export default Shell