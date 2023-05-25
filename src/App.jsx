import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Trends from './components/Trends'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notifications from './pages/Notifications'

const App = () => {

  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="mainContents">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
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
