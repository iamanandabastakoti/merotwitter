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

const App = () => {

  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="mainContents">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/twitterblue' element={<TwitterBlue />} />
            <Route path='/tweet/:id' element={<SingleTweet />} />
          </Routes>
        </div>
        <Trends />
      </div>
    </>
  )
}

export default App
