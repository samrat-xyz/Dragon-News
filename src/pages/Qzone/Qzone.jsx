import React from 'react'
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import bg1 from '../../assets/bg1.png'
function Qzone() {
  return (
    <div className='p-4 bg-[#F3F3F3] space-y-3'>
      <h1 className='text-xl font-bold'>Qzone</h1>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div className='mt-8'>
        <img src={bg1} alt="" />
      </div>
    </div>
  )
}

export default Qzone
