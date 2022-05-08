import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b-2 flex justify-start items-center px-44 py-4 space-x-8 text-sm md:text-lg font-medium opacity-70'>
        <NavLink to="/" >
            <h1 className='cursor-pointer'> Home </h1>
        </NavLink>

        <NavLink to="/manageproducts">
            <h1 className='cursor-pointer'> Manage Products </h1>
        </NavLink>
    </div>
  )
}

export default Navbar