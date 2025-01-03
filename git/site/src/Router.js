import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing'
import UserInfo from './UserInfo'
import Error from './Error'
import BasicQuiz from './BasicQuiz'
import Login from './Login'
import QuizHistory from './QuizHistory'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/basicQuiz1" element={<BasicQuiz />} />
            <Route path="/quizHistory" element={<QuizHistory />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
