import React, { useState } from 'react'
import { Link } from "react-router-dom"

function SubMenu({item}) {

    const [isLinkActive, setIsLinkActive] = useState(false);

  return (
    <Link to={`${item}`}>
      <div className={`p-[0.6vw] hover:bg-[#e1d2f0] rounded-md flex items-center ${isLinkActive ? "bg-[#e1d2f0]" : "bg-transparent"}`} onClick={() => setIsLinkActive(!isLinkActive)}>
          <span className='text-[1vw] font-inter font-medium capitalize'>{item}</span>
      </div>
    </Link>
  )
}

export default SubMenu