import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div>
      <header className='w-11/12 mx-auto my-8 '>
        <Navbar/>
      </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AuthLayout
