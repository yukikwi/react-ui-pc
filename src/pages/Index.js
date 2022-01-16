import React from 'react'
import Navbar from '../components/Navbar'
import Storage from '../components/Storage'
import VolumeMixer from '../components/VolumeMixer'
import Program from '../components/Program'

function Index() {
  return (
    <div className='h-screen w-screen bg-primary-pink overflow-hidden'>
      {/* Navbar */}
      <Navbar />

      {/* Program area */}
      <div className='relative overflow-hidden w-screen h-full'>
        <Program
          programBarBG='bg-blue-500'
          programName='Storage'
        >
          <Storage />
        </Program>

        <Program
          programBarBG='bg-program'
          programName='&nbsp;'
        >
          <VolumeMixer />
        </Program>
      </div>
    </div>
  )
}

export default Index
