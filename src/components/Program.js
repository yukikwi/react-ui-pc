import React, { useRef } from 'react'
import Draggable from 'react-draggable';
import MinusSm from './icons/MinusSm'
import SquareOutline from './icons/SquareOutline'
import X from './icons/X'

function Program({ children, programName, programBarBG }) {
  const programRef = useRef(null)

  // method
  const handleClose = () => {
    programRef.current.style.display = 'none'
  }

  return (
    <Draggable handle=".programbar" nodeRef={programRef}>
      <div className='shadow-black/50 shadow-lg bg-white/70 w-2/6 mt-4 rounded-md overflow-hidden' ref={programRef}>
        {/* Program bar */}
        <div className={`w-full ${programBarBG} programbar text-center relative text-white p-1`}>
            {/* Program control */}
            <div className='absolute flex top-0 bottom-0 items-center'>
              <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`:`text-program`} mr-1`} onClick={() => { handleClose() }}>
                <X className='w-4 h-4' />
              </button>
              <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`:`text-program`} mr-1`}>
                <SquareOutline className='w-4 h-4' />
              </button>
              <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`:`text-program`} mr-1`}>
                <MinusSm className='w-4 h-4' />
              </button>
            </div>
            {/* Program name */}
            <span className='font-bold'>{programName}</span>
        </div>
        {/* Program content */}
        {children}
      </div>
    </Draggable>
  )
}

export default Program
