import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Trends from './components/Trends'
import { Route, Routes } from 'react-router-dom'
import Notifications from './pages/Notifications'
import SingleTweet from './pages/SingleTweet'
import Explore from './pages/Explore'
import Messages from './pages/Messages'
import Lists from './pages/Lists'
import Bookmarks from './pages/Bookmarks'
import TwitterBlue from './pages/TwitterBlue'
import UserProfile from './pages/UserProfile'
import LogIn from './pages/LogIn'
import BottomNavBar from './BottomNavBar'

const App = ({ userApi }) => {

  return (
    <>
      <div className="app">
        <Sidebar userApi={userApi} />
        <div className="mainContents">
          <Routes>
            <Route index element={<Home userApi={userApi} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/twitterblue' element={<TwitterBlue />} />
            <Route path='/tweet/:id' element={<SingleTweet />} />
            <Route path='/profile/:userkey' element={<UserProfile />} />
          </Routes>
        </div>
        <BottomNavBar />
        <Trends />
      </div>
    </>
  )
}

export default App
