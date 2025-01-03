import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Quiz Site</h1>
      <p>- this is navbar -</p>

      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Landing
            </NavLink>
          </li>

          <li>
            <NavLink to="/userInfo" activeClassName="active">
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/quizHistory" activeClassName="active">
              Quiz History
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
