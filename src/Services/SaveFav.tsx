import {GiffType} from "Components/ListOfGiffs/ListOfGiffs"
import { USER_API_URI } from "../Services/settings"

type ArgsType = {
    giff: GiffType
    token: string | null
}

const saveFav = async ({giff, token}:ArgsType) => {
    
    try {
        const apiData = await fetch(
            `${USER_API_URI}/api/favs/createFav`,
            {   method: "POST",
                headers:{ 
                    "Content-Type": "application/json", 
                    "Authorization": `Bearer ${token}` 
                },
                body: JSON.stringify({giff})
            }
        )
        const {favSaved, error } = await apiData.json()
        
        return {
            info: favSaved ? favSaved : null,
            error: error ? error : null 
        }
        
    } catch (error) {
        return {error}
    }
    
}

export default saveFav