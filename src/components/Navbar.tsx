import React from 'react'
import "./Navbar.css"
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (isLoggedIn) {
      localStorage.clear();
      navigate("/login");
    } else {
      localStorage.setItem("token", "12345");
      navigate("/home/dashboard");
    }
  }
  return (
    <div className='nav'>
      <div className='left-nav'>
        <h1>Spotify 2.0</h1>
        <ul className='menu-items'>
          <li><NavLink to="/home/dashboard" className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>Home</NavLink></li>
          <li><NavLink to="/home/albums" className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>Albums</NavLink></li>
          <li><NavLink to="/home/about" className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>About</NavLink></li>
        </ul>
      </div>

      <div className='right-nav'>
        <input type="text" placeholder='Search' className='search-input' />
        <button className='login-btn' onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        {!isLoggedIn && <button className='signup-btn' onClick={handleLogin}>Sign Up</button>}
        {isLoggedIn && <img src={"/logo192.png"} alt="user photo" className='profile-pic' />}
      </div>
    </div>
  )
}
