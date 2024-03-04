import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

export default function PrivateRouteCommon() {
  const isLoggedIn=localStorage.getItem("token");
  return (
    <div>
    <Navbar/>
    <div className='d-flex'>
    <Sidemenu/>
    <div className='outlet-component'>
    {isLoggedIn?<Outlet/>:<Navigate to="/login"/>}
    </div>
    </div>
  </div>
  )
}
