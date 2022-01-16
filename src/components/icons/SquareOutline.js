import React from 'react'

function SquareOutline(props) {
  const {className} = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 6 5 a 1 1 0 0 0 -1 1 v 12 a 1 1 0 0 0 1 1 h 12 a 1 1 0 0 0 1 -1 V 6 a 1 1 0 0 0 -1 -1 z"/>
    </svg>
  )
}

SquareOutline.defaultProps = {
  className: 'h-6 w-6'
}

export default SquareOutline
