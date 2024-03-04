import React from 'react'

type PublicRouteProps={
  component:React.FC
}
export default function PublicRoute({component:Component}:PublicRouteProps) {
  return <Component/>
}
