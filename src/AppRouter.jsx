import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostFormation from './components/PostFormation/PostFormation'
import Home from './pages/Home'
import LoginForm from './components/Login/LoginForm'
import RegistrationForm from './components/Registration/RegistrationForm'
import FreeCourse from './components/Free-course-sction/FreeCourse'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PostFormation" element={<PostFormation/>} />
        <Route path='/Login' element={<LoginForm/>}    />
        <Route   path='/registration' element={<RegistrationForm/>}/>
        <Route  path='/freecourse' element={<FreeCourse/>}/>
        <Route path=''/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
