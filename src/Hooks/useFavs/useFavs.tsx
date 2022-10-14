import UserContext from "Context/UserContext";
import { useContext, useEffect } from "react";
import getUserFavs from "Services/GetUserFavs"
import { useLocation } from "wouter";

const useFavs = () => {
    
    const { updateFavorites, jwt, setIsLoggedIn } = useContext(UserContext)   
    
    const [, navigate] = useLocation()

    useEffect(()=> {
        getUserFavs({jwt}).then(info=> {
            const {favs,error} = info
            
            if( error ) {
                setIsLoggedIn(false)
                navigate("/")    
            }

            if( favs ) {
                updateFavorites(previnfo => favs.map((fav:any)=> fav.giff))
            }
            
            
        } )
    }, [jwt, navigate, setIsLoggedIn, updateFavorites])

}

export default useFavs