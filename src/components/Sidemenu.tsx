import React from 'react'
import "./Sidemenu.css"
import { NavLink } from 'react-router-dom'

export default function Sidemenu() {
  return (
    <div className='sidemenu-container'>
      <ul className='sidemenu-items'>
        <li><NavLink to="/home/dashboard" className={({isActive})=>isActive?'sidelink-active':'link-default'}>Home</NavLink></li>
        <li><NavLink to="/home/albums" className={({isActive})=>isActive?'sidelink-active':'link-default'}>Albums</NavLink></li>
        <li><NavLink to="/home/about" className={({isActive})=>isActive?'sidelink-active':'link-default'}>About</NavLink></li>
      </ul>
    </div>
  )
}
