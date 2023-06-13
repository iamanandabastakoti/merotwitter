import React, { useState } from 'react'
import LogIn from './pages/LogIn'
import App from './App.jsx'

const Shell = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="shell">
      {loggedIn ? <App /> : <LogIn setLoggedIn={setLoggedIn} />}

    </div>
  )
}

export default Shell