import React from 'react'
import { Link, NavLink } from 'react-router'
import user from '../../assets/user.png'
function Navbar() {
    const links = <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </>
  return (
    <div className='flex items-center justify-between'>
      <ul className='mx-auto flex items-center gap-8'>
        {links}
      </ul>
      <div className='flex items-center gap-4'>
        <div className='w-9 h-9 '>
            <img src={user} alt="" />
        </div>
        <Link to='/auth' className='text-white px-6 py-2 rounded bg-[#403F3F]'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar
