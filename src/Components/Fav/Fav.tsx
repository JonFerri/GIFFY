import "./Fav.css"
import React, { useCallback, useContext } from "react";
import { MdStarBorder, MdStar } from "react-icons/md"
import { GiffType } from "Components/ListOfGiffs/ListOfGiffs";
import useIsFav from "Hooks/useIsFav/useIsFav";
import UserContext from "Context/UserContext";
import saveFav from "Services/SaveFav";
import {useLocation} from 'wouter'


type FavArgsType = {
    giff: GiffType
}

const Fav = ({giff}:FavArgsType) => {
    
    const { isFav } = useIsFav({giff})
    const { updateFavorites, favorites, jwt, setIsLoggedIn } = useContext(UserContext)   
    const [,navigate] = useLocation() 


    const toggleIsFav = useCallback(()=> {
        
        if (isFav) {
            const fav = favorites.findIndex(item => item.id === giff.id)
            
            console.log(fav)
            const newFavs = favorites
            const sliced = newFavs.splice(fav,1)
            console.log({sliced,newFavs})
            updateFavorites(prevFavs => newFavs)
        }
        if (!isFav) {
            saveFav({giff, token: jwt})
                .then(savedFavInfo => {
                    const { info, error } = savedFavInfo

                    if (error) {
                        setIsLoggedIn(false)
                        navigate("")
                    }
                    if (info){
                        updateFavorites(prevFavs => [...prevFavs, info.giff])
                    }
                    
                })
        }
        
        
    },[favorites, giff, isFav, jwt, navigate, setIsLoggedIn, updateFavorites])

    

    return isFav ? 
        <div className="fav-box fav" onClick={toggleIsFav}>
            <MdStar className="icon" />
        </div>
     : (
        <div className="fav-box" onClick={toggleIsFav}>
            <MdStarBorder className="icon" />
        
        </div>
    )
    

    
}

export default Fav