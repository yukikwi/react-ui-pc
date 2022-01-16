import React from 'react'

function MinusSm(props) {
  const {className} = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
  )
}

MinusSm.defaultProps = {
  className: 'h-6 w-6'
}

export default MinusSm
