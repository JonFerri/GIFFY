import {GiffType} from "Components/ListOfGiffs/ListOfGiffs"

type ArgsType = {
    giff: GiffType
    token: string | null
}

const saveFav = async ({giff, token}:ArgsType) => {
    
    try {
        const apiData = await fetch(
            "http://localhost:3030/api/favs/createFav",
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