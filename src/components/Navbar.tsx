import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const handleLogin = () => {
    localStorage.setItem("token", "12345");
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
        <button className='login-btn' onClick={handleLogin}>Login</button>
        <button className='signup-btn' onClick={handleLogin}>Sign Up</button>
        <img src={"/logo192.png"} alt="user photo" className='profile-pic' />
      </div>
    </div>
  )
}
