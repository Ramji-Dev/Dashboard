import React from 'react'

function UserCategories({name, number}) {
  return (
    <div>
        <div onClick={() => setIsActive(!isActive)}>
            <div className={`w-fit flex items-center justify-center gap-[0.8vw] px-[0.8vw] py-[0.2vw] border-2 border-[#5e3a7a] rounded-md capitalize text-[0.6vw] font-inter font-semibold ${name==="All" ? "bg-[#5e3a7a] text-white" : "text-[#5e3a7a]"}`}>
                <span>
                    {name}
                </span>
                <span className='bg-[#a270f7] text-white rounded-[100%] w-[1.5vw] h-[1.5vw] flex items-center justify-center'>
                    {number}
                </span>
            </div>
        </div>
    </div>
  )
}

export default UserCategories