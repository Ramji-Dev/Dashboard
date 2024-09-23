import React, { useState } from 'react'
import SubMenu from './SubMenu';

function NavItem({name, data, logo}) {

    const [isActive, setIsAcive] = useState(false);

    const handleMenu = () => {
        setIsAcive(!isActive)
    }

  return (
    <div >
        {
            <div className='flex flex-col' key={name} >
                <div className={`flex items-center gap-[0.5vw] p-[0.8vw] rounded-md hover:bg-[#5d3979] hover:text-white ${isActive && data ? "bg-[#5d3979] text-white" : "bg-transparent text-black"}`} onClick={handleMenu}>
                    <div>{logo}</div>
                    <div className='font-inter font-semibold text-[0.9vw] pointer-events-none'>{name}</div>
                </div>

                <div className='flex flex-col ml-[3vw] pl-[1vw] border-l-2 border-gray-300 my-[0.5vw]'>
                    {
                        isActive && data?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <SubMenu item={item} index={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }
    </div>
  ) 
}

export default NavItem