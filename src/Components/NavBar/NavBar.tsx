import "./NavBar.css"
import React from "react"
import { Link } from "wouter"
import { FaHome, FaSearch, FaShare } from "react-icons/fa"

interface NavBarPropsInterface {
  name?: string
}

const NavBar = ({ name }: NavBarPropsInterface) => {
  return (
    <div className='nav-bar-container'>
      <div className='link-group'>
        <Link href='/' className='link'>
          <FaHome className='icon' size="24px" />
        </Link>
        <Link href='/' className='link'>
          <span className='text'>Home</span>
        </Link>
      </div>
      <div className='link-group'>
        <Link href='/' className='link'>
          <FaSearch className='icon' size="24px" />
        </Link>
        <Link href='/' className='link'>
          <span className='text'>Search</span>
        </Link>
      </div>
      <div className='link-group'>
        <Link href='/' className='link'>
          <FaShare className='icon' size="24px" />
        </Link>
        <Link href='/' className='link'>
          <span className='text'>Share</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
