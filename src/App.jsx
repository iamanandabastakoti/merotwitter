import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Trends from './components/Trends'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notifications from './pages/Notifications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="mainContents">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/notifications' element={<Notifications />} />
          </Routes>
        </BrowserRouter>
        </div>
        <Trends />
      </div>
    </>
  )
}

export default App
