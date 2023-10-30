import React from 'react'
import Home from './components/pages/Home'
import LoginandSignUp from './components/authcontroller/LoginandSignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgetPassword from './components/authcontroller/ForgetPassword'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginandSignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
