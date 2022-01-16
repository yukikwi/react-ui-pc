import React, { useRef, useEffect } from 'react'

function RangeInput2({className, animate}) {
  const bar = useRef(null)

  useEffect(() => {
    // Method
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }

    bar.current.style.animationDelay = `${getRandomInt(3)}s`
  }, [])

  return (
    <div className='relative w-full'>
      <div className={`h-[150px] w-[8px] rounded-md mx-auto ${className}`} />
      <div className={`absolute flex items-center p-1 w-[20px] h-[40px] bg-program mx-auto left-0 right-0 top-0 rounded-md ${animate === 1? 'animate-top-bottom':'animate-top-bottom-2 top-[30px]'}`} ref={bar}>
        <div className='bg-program-bg w-full h-[2px]' />
      </div>
    </div>
  )
}

RangeInput2.defaultProps = {
  animate: 1
}

export default RangeInput2
