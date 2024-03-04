import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouteProps={
  component:React.FC
}
export default function PrivateRoute({component:Component}:PrivateRouteProps) {
  const isLoggedIn=localStorage.getItem("token");
  return isLoggedIn?<Component/>:<Navigate to="/login"/>;
}
