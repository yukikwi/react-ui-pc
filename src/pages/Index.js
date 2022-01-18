import React from 'react'
import Navbar from '../components/Navbar'
import Storage from '../components/Storage'
import VolumeMixer from '../components/VolumeMixer'
import Program from '../components/Program'
import VolumeUp from '../components/icons/VolumeUp'
import Browser from '../components/Browser'
import Youtube from '../components/Youtube'

function Index() {
  return (
    <div className='h-screen w-screen bg-primary-pink overflow-hidden'>
      {/* Navbar */}
      <Navbar />

      {/* Program area */}
      <div className='relative overflow-hidden w-screen h-full'>

        <Program
          className='top-1 left-[10%]'
          programBarBG='bg-program'
          programName='&nbsp;'
          thick
          isTabPill
        >
          <Browser />
        </Program>

        <Program
          className='top-24 right-[5%]'
          programBarBG='bg-blue-500'
          width='w-2/6'
          programName='Storage'
        >
          <Storage />
        </Program>

        <Program
          className='top-1 right-[10%]'
          width='min-w-[33.33%]'
          programBarBG='bg-program'
          programName={[<VolumeUp className='inline-block w-6 h-6' />, 'Volume Mixer']}
        >
          <VolumeMixer />
        </Program>

        <Program
          className='top-1/3 right-[10%]'
          width='min-w-1/2'
          programBarBG='bg-primary-pink'
          programName='&nbsp;'
        >
          <Youtube />
        </Program>
      </div>
    </div>
  )
}

export default Index
