import "./NavBar.css"
import React from "react"
import { Link } from "wouter"
import { FaHome } from "react-icons/fa"

interface NavBarPropsInterface {
  name?: string
}

const NavBar = ({ name }: NavBarPropsInterface) => {
  return (
    <div className='nav-bar-container'>
      <Link href='/'>
        <FaHome style={{ color: "white", marginLeft: "30px" }} />
      </Link>
    </div>
  )
}

export default NavBar
