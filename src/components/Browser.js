import { faBars, faChevronLeft, faChevronRight, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Browser.css'

function Browser() {
  return (
    <div>
      {/* Browser bar */}
      <div className='bg-program-bg-light w-full p-2 text-program-bg'>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-1'>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className='col-span-1'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className='col-span-1'>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className='col-span-9 relative text-program-bg-light'>
            <input type="text" className='rounded-full bg-program-bg w-full px-1'/>
            <FontAwesomeIcon className='absolute right-[5px] top-1/2 -translate-y-1/2' icon={faRedo} />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className='bg-program-bg h-[75vh] px-3 py-1 overflow-y-hidden'>
        <div className='flex flex-col gap-10 scroll-auto'>
          <h1 className='text-3xl'>
            React UI PC
          </h1>
          <h2 className='text-xl'>
            Design from Shigure UI 3D live stream (at ~45 min)
          </h2>
          <div>&nbsp;</div>
          <h3 className='text-xl'>
            - Tools -
          </h3>
          <h4 className='text-xl'>
            React
          </h4>
          <h4 className='text-xl'>
            TailwindCSS
          </h4>
          <h4 className='text-xl'>
            React-Youtube
          </h4>
          <h4 className='text-xl'>
            FontAwesome
          </h4>
          <h4 className='text-xl'>
            React-useinterval
          </h4>
          <h4 className='text-xl'>
            HeroIcon
          </h4>
          <h4 className='text-xl'>
            Etc...
          </h4>
          <div>&nbsp;</div>
          <h3 className='text-xl'>
            - Full Live Stream -
          </h3>
          <h4 className='text-xl'>
            <a href="https://www.youtube.com/watch?v=NmP_EJdcE6E" rel="noreferrer" target="_blank">https://www.youtube.com/watch?v=NmP_EJdcE6E</a>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Browser
