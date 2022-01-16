import React from 'react'
import StorageIcons from './icons/Storage'

function Storage() {
  return (
    <div className='bg-program-bg px-3 py-2 text-black hover:cursor-default'>
      <div className='grid grid-cols-5 items-center gap-3'>

        <div className='col-span-1 text-center font-bold'>
          <StorageIcons className='w-full' />

          <h2 className='mt-3 text-lg leading-[0.3rem]'>
            490GB
          </h2>
          <span className='text-xs leading-[0rem]'>SSD STORAGE</span>
        </div>

        <div className='col-span-4'>
          <div className='flex justify-between'>
            <h1 className='font-bold'>SHIGURE SSD</h1>
            <h1 className='font-bold'>321/490GB</h1>
          </div>

          <div className='mt-3'>
            {/* Progress bar */}
            <div className='h-10 w-full bg-black rounded-lg overflow-hidden'>
              <span className='bg-primary-pink w-4/12 h-full inline-block'>
                {/* Section 1 */}
              </span>
              <span className='bg-teal-400 w-2/12 h-full inline-block'>
                {/* Section 2 */}
              </span>
              <span className='bg-amber-400 w-1/12 h-full inline-block'>
                {/* Section 3 */}
              </span>
            </div>
            {/* Progress bar color description */}
            <ul className='mt-1 flex'>
              {/* Bar section 1 description */}
              <li className='flex items-center'>
                <div className='bg-primary-pink w-3 h-3 rounded-sm inline-block' />
                <span className='inline-block h-2 w-10 bg-black ml-1 '>
                  {/* Text description 1 */}
                </span>
              </li>

              {/* Bar section 2 description */}
              <li className='flex items-center ml-3'>
                <div className='bg-teal-400 w-3 h-3 rounded-sm inline-block' />
                <span className='inline-block h-2 w-10 bg-black ml-1 '>
                  {/* Text description 2 */}
                </span>
              </li>

              {/* Bar section 3 description */}
              <li className='flex items-center ml-3'>
                <div className='bg-amber-400 w-3 h-3 rounded-sm inline-block' />
                <span className='inline-block h-2 w-10 bg-black ml-1 '>
                  {/* Text description 3 */}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Storage
