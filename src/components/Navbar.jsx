import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <NavLink to={'/home'}>Home</NavLink>
        <br></br>
        <NavLink to={'/about'}>About</NavLink>
        <br></br>
        <NavLink to={'/user/aditya'}>User</NavLink>
    </>
  )
}

export default Navbar