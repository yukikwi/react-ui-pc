import React from 'react'
import Battery from './icons/Battery'
import MonitorOutline from './icons/MonitorOutline'
import Translate from './icons/Translate'
import Wifi from './icons/Wifi'

function Navbar() {
  return (
    <div className='bg-white/70 w-screen flex justify-between text-black font-bold'>
      {/* nav item left */}
      <div>
        <ul className='flex items-center'>
          <li className='inline-block mr-2 p-1'><MonitorOutline /></li>
          <li className='inline-block mr-2 p-1'>File</li>
          <li className='inline-block mr-2 p-1'>Edit</li>
          <li className='inline-block mr-2 p-1'>View</li>
          <li className='inline-block mr-2 p-1'>Profile</li>
          <li className='inline-block mr-2 p-1'>Scence Collection</li>
          <li className='inline-block mr-2 p-1'>Tools</li>
          <li className='inline-block mr-2 p-1'>Help</li>
        </ul>
      </div>

      {/* nav item right */}
      <div>
        <ul className='flex items-center'>
          <li className='inline-block mr-2 p-1'>
            <Wifi />
          </li>
          <li className='inline-block mr-2 p-1'>
            <Battery />
          </li>
          <li className='inline-block mr-2 p-1'>
            <Translate />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
