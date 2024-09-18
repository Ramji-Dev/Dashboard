import React from 'react'

function Filters({name, logo}) {
  return (
    <div className={`flex items-center justify-center gap-[0.5vw] px-[0.5vw] py-[0.2vw] border-2 border-[#5e3a7a] rounded-md capitalize text-[0.6vw] font-inter font-semibold ${name==="add user" ? "bg-[#5e3a7a] text-white" : "text-[#5e3a7a]"} `}>
        <div>{logo}</div>
        <div>{name}</div>
    </div>
  )
}

export default Filters