import { useContext, useEffect, useState } from "react";
import { GiffType } from "Components/ListOfGiffs/ListOfGiffs"
import UserContext from "Context/UserContext";


type ArgsUseIsFavType = {
    giff: GiffType
}

const useIsFav = ({giff}:ArgsUseIsFavType) => {
    
    const [ isFav, setIsFav] = useState(false)
    const { favorites } = useContext(UserContext)

    
    useEffect(()=> {
        const { id } = giff
        const checkFav = favorites.some(favGiff => favGiff.id === id)
        setIsFav(checkFav)
    },[favorites, giff])
    
 
    return { isFav, setIsFav }

}

export default useIsFav 