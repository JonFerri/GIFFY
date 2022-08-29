import "./NavBar.css"
import React from "react"

interface NavBarPropsInterface {
    name?:string
}

const NavBar = ({name}:NavBarPropsInterface) => {
    return (
        <div className="nav-bar-container">
            <a href="/home">Home</a>
        </div>
    )
}

export default NavBar