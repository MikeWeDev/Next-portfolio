'use client'
import {useState} from 'react'
import Nav from '@/app/Component/Nav'
import MobileNav from './Component/MobileNav';

function NavCol() {
    const [nav ,setNav] =useState(false)
    const openNav = ()=> setNav(true)
    const closeNav = ()=> setNav (false)
  return (
    <div>
         <Nav nav={nav} open={openNav} />
         <MobileNav nav={nav} closeNav={closeNav}  />
    </div>
  )
}

export default NavCol

