import React from 'react'
import './RangeInput.css'

function RangeInput({className}) {

  return (
    <div class="slidecontainer flex items-center">
      <input type="range" min="1" max="100" className={`slider ${className}`} orient="vertical" />
    </div>
  )
}

export default RangeInput
