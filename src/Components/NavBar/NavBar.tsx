import "./NavBar.css"
import React, { useContext, useCallback } from "react"
import { Link, useLocation } from "wouter"
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa"
import UserContext from "Context/UserContext"

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, setJwt, userName } = useContext(UserContext)
  const [, navigate] = useLocation()

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setJwt("")
    navigate("/")

    window.sessionStorage.removeItem("infoToken")

  },[navigate, setIsLoggedIn, setJwt])

  return (
    <nav className='nav-bar-container'>
      
      {
        isLoggedIn ? (
          <Link href='/userhome' className='link'>
            <a className='link-group' href='/'>
              <FaHome className='icon' size='24px' />
              <span className='text'>{userName}</span>
            </a>
          </Link>  
        ) : (
          <Link href='/' className='link'>
            <a className='link-group' href='/'>
              <FaHome className='icon' size='24px' />
              <span className='text'>Home</span>
            </a>
      </Link>  
        )
      }
      

      {isLoggedIn ? (
        <Link href='/' className='link'>
          <a href='/' className='link-group'>
            <FaSignOutAlt className='icon' size='24px' />
            <span className='text' onClick={logout}>
              Logout
            </span>
          </a>
        </Link>
      ) : (
        <Link href='/login' className='link'>
          <a href='/login' className='link-group'>
            <FaUser className='icon' size='24px' />
            <span className='text'>Login</span>
          </a>
        </Link>
      )}
    </nav>
  )
}

export default NavBar
