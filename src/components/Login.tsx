import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "12345");
    navigate("/home/dashboard");
  }
  return (
    <div>
      <Navbar />
      <div style={{display:'flex'}}>
        <Sidemenu />
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>Submit</button>
        </div>
      </div>
    </div>
  )
}
