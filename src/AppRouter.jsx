import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTraining from './components/AddTrainning/AddTrainning'
import Home from './pages/Home'
import LoginForm from './components/Login/LoginForm'
import RegistrationForm from './components/Registration/RegistrationForm'
import FreeCourse from './components/Free-course-sction/FreeCourse'
import Training from './components/Training/training'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:accessToken" element={<Home />} />
        <Route path="/AddTraining" element={<AddTraining />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/freecourse' element={<FreeCourse />} />
        <Route path="/training/:id" element={<Training />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
