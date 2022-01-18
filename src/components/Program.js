import React, { useRef } from 'react'
import Draggable from 'react-draggable';
import MinusSm from './icons/MinusSm'
import SquareOutline from './icons/SquareOutline'
import X from './icons/X'

function Program({ children, className, defaultPosition, width, programName, programBarBG, thick, isTabPill }) {
  const programRef = useRef(null)

  // method
  const handleClose = () => {
    programRef.current.style.display = 'none'
  }

  return (
    <Draggable handle="#programbar" defaultPosition={defaultPosition} nodeRef={programRef}>
      <div className={`absolute shadow-black shadow-md bg-white/70 ${width} mt-4 rounded-md overflow-hidden ${className}`} ref={programRef}>
        {/* Program bar */}
        <div id='programbar' className={`w-full ${programBarBG} text-center relative text-white ${thick? `py-3`:`py-1`} px-2`}>
            {/* Program control */}
            <div className='absolute top-0 bottom-0 w-full text-left'>
              <div className='inline-flex items-center h-full'>
                <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`: programBarBG === 'bg-primary-pink'? `text-primary-pink`:`text-program`} mr-1`} onClick={() => { handleClose() }}>
                  <X className='w-4 h-4' />
                </button>
                <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`: programBarBG === 'bg-primary-pink'? `text-primary-pink`:`text-program`} mr-1`}>
                  <SquareOutline className='w-4 h-4' />
                </button>
                <button className={`rounded-full bg-white ${programBarBG === 'bg-blue-500'? `text-blue-500`: programBarBG === 'bg-primary-pink'? `text-primary-pink`:`text-program`} mr-1`}>
                  <MinusSm className='w-4 h-4' />
                </button>
              </div>

              {/* Tab Pill support fior browser */}
              {
                isTabPill && (
                  <div className='absolute bottom-0 w-3/4 inline-block'>
                    <div className='relative h-[36px] overflow-y-hidden'>
                      <div className="inline-block ml-2 bg-program-bg-light w-1/4 h-[36px] rounded-t-lg"/>
                      <span className="absolute rounded-bl-lg inline-block w-[40px] h-[34px] -ml-[3px] -bottom-[2px] border-program-bg-light border-l-2 border-b-2" />
                    </div>
                  </div>
                )
              }
            </div>
            {/* Program name */}
            <span className='font-bold flex items-center justify-center gap-1'>{programName}</span>
        </div>
        {/* Program content */}
        {children}
      </div>
    </Draggable>
  )
}

Program.defaultProps = {
  thick: false,
  width: 'min-w-2/6',
  className: ''
}

export default Program
