import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from './components/Logo'
import Home from './components/Home'
import Signup from './components/SIgnup';
import Login from './components/Login';
import MainWebPage from './components/pages/MainWebPage';
import ChatPage from './components/pages/ChatPage';
import StatusPage from './components/pages/StatusPage';
import CallsPage from './components/pages/CallsPage';
import Communities from './components/pages/Communities';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/home" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mainwebpage' element={<MainWebPage />} />
          <Route path="/chat/:userId" element={<ChatPage/>} />
          <Route path='/status' element={<StatusPage />} />
          <Route path='/calls' element={<CallsPage />} />
          <Route path='/communities' element={<Communities />} />
        </Routes>
      </Router>
    </>
  )
}

export default App