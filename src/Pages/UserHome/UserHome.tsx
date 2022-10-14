import "./UserHome.css"
import React, { useContext } from 'react'
import SearchBar from "Components/SearchBar/SearchBar"
import Header from "Components/Header/Header"
import useFavs from "Hooks/useFavs/useFavs"
import ListOfGiffs from "Components/ListOfGiffs/ListOfGiffs"
import UserContext from "Context/UserContext"

const UserHome = () => {
    
    useFavs(); //populates favs array for the user, only at logging in
    const { favorites } = useContext(UserContext)
    return (
        <div className="user-home-container">
            <Header />
            <SearchBar initialKeyword="" initialLimit={ 5 } initialLang="en"/>
            <ListOfGiffs giffs={favorites} /> 
            
        </div>
    )
}

export default UserHome