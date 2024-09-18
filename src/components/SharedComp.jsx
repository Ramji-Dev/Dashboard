import React from 'react'

function SharedComp({name}) {
  return (
    <div className='text-9xl capitalize flex items-center justify-center h-screen text-[#e1d2f0] bg-[#5d3979]'>{name}</div>
  )
}

export default SharedComp