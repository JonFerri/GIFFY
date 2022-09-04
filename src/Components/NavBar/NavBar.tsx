import "./NavBar.css"
import React from "react"
import {Link} from 'wouter'
interface NavBarPropsInterface {
    name?:string
}

const NavBar = ({name}:NavBarPropsInterface) => {
    return (
        <div className="nav-bar-container">
            <Link href="/">Home</Link>
        </div>
    )
}

export default NavBar