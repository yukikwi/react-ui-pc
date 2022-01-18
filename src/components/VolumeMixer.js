import React from 'react'
import VolumeUp from './icons/VolumeUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLine, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFan, faGamepad } from '@fortawesome/free-solid-svg-icons'
import RangeInput2 from './RangeInput2'

function VolumeMixer() {
  return (
    <div className='bg-program-bg py-2 text-black hover:cursor-default'>
      <div className='grid grid-cols-6 gap-2'>
        <div>
          <div className='flex flex-col items-center gap-2 border-r-2 border-black px-2'>
            <span>Device</span>
            <VolumeUp />
            <span className='text-xs'>Speaker</span>
            <RangeInput2 className='bg-primary-pink' animate={2} />
          </div>
        </div>
        <div className='col-span-5'>
          <span>Application</span>
          <div className='grid grid-cols-5 gap-1 mt-2 px-2'>
            <div className='flex flex-col items-center gap-2'>
              <FontAwesomeIcon className='h-6 w-6' icon={faDiscord} />
              <span className='text-xs'>Uiscord</span>
              <RangeInput2 className='bg-primary-pink' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <FontAwesomeIcon className='h-6 w-6' icon={faGamepad} />
              <span className='text-xs'>Game</span>
              <RangeInput2 className='bg-teal-400' animate={2} />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <FontAwesomeIcon className='h-6 w-6' icon={faFan} />
              <span className='text-xs'>SStudio</span>
              <RangeInput2 className='bg-amber-400' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <FontAwesomeIcon className='h-6 w-6' icon={faYoutube} />
              <span className='text-xs'>YT</span>
              <RangeInput2 className='bg-teal-400' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <FontAwesomeIcon className='h-6 w-6' icon={faLine} />
              <span className='text-xs'>Uine</span>
              <RangeInput2 className='bg-amber-400' animate={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolumeMixer
