import React from 'react'
import "./Home.css"
import { Link, NavLink, Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

export default function Home() {
  const {id}=useParams();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const country = searchParams.get("country");
  return (
    <div>
      <Navbar/>
      <div className='d-flex'>
      <Sidemenu/>
      <div className='outlet-component'>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}
