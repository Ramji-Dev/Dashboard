import React, { useState } from 'react'

function Button({status}) {
    
    const [ isActive, setIsActive ] = useState(status);

  return (
    <div>
        <div className={`${isActive ? "bg-[#5d3979]" : "bg-gray-300"} overflow-hidden w-[2vw] h-[1vw] rounded-full flex items-center px-[0.2vw] relative`} onClick={() => {setIsActive(!isActive)}}>
            <div className={`bg-white w-[0.7vw] h-[0.7vw] rounded-full absolute mx-[0.2vw] duration-300 shadow-[0px_0px_10px_1px_rgba(0,0,0,0.3)] ${isActive ? "translate-x-[100%]" : "-translate-x-[10%]"}`}></div>
        </div>
    </div>
  )
}

export default Button