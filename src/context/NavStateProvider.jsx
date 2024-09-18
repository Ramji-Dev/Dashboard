import React, { useState } from 'react'
import { NavbarContext } from './NavState'

function NavStateProvider({children}) {
    const [showMenu, setShowMenu] = useState(true);
  return (
    <NavbarContext.Provider value={{showMenu, setShowMenu}}>
        {children}
    </NavbarContext.Provider>
  )
}

export default NavStateProvider