import React from 'react'
import { Navigate } from 'react-router'

function Home() {
  return (
    <div>
      <Navigate to='/category/0'></Navigate>
    </div>
  )
}

export default Home
