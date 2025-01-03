import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"

const handleClick = () => {
  console.log('clicked on Landing, button to quiz#1')

}

const Landing = () => {
  return (
    <div>
      <Header />

      <h1>landing page</h1>

      <p><Link to="/basicQuiz1">take basic quiz #1</Link></p>
      </div>
  )
}

export default Landing
