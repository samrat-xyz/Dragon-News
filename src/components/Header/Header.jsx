import React from 'react'
import logo from '../../assets/logo.png';
import { format } from "date-fns";

function Header() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-8'>
      <img src={logo} alt="" />
      <p className='text-md text-[#706F6F]'>Journalism Without Fear or Favour</p>
      <p className='font-semibold text-lg text-[#706F6F]'>{format(new Date(), "EEEE, MMMM MM,yyyy")}</p>
    </div>
  )
}

export default Header
